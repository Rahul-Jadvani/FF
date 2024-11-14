"use client";
import { useEffect, useRef, useState, useCallback } from "react";

type LatLng = {
  lat: number;
  lng: number;
};

const MapSection: React.FC = () => {
  const [isLocation, setIsLocation] = useState("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [routeUrl, setRouteUrl] = useState<string>("");
  const [currentLocationUrl, setCurrentLocationUrl] = useState<string>("");
  const mapRef = useRef<HTMLDivElement>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);
  const directionsRenderer = useRef<google.maps.DirectionsRenderer | null>(
    null
  );
  const geocoder = useRef<google.maps.Geocoder | null>(null);
  const selectedMarker = useRef<google.maps.Marker | null>(null);
  const GOMAPS_API_KEY = process.env.NEXT_PUBLIC_GOMAPS_API_KEY;

  // handlePlaceChanged function that handles when a place is selected in the input field
  const handlePlaceChanged = (
    autocomplete: google.maps.places.Autocomplete,
    inputType: string
  ) => {
    const place = autocomplete.getPlace();
    if (place.geometry && place.geometry.location) {
      const latLng = place.geometry.location;
      const position: LatLng = { lat: latLng.lat(), lng: latLng.lng() };

      placeMarker(position);

      if (inputType === "from" && fromInputRef.current) {
        fromInputRef.current.value = place.name || "";
      } else if (inputType === "to" && toInputRef.current) {
        toInputRef.current.value = place.name || "";
      }

      mapInstance.current?.panTo(position);
      mapInstance.current?.setZoom(14);
    }
  };

  // handleLocationPlaceChanged function that handles when a location is selected
  const handleLocationPlaceChanged = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    const place = autocomplete.getPlace();
    if (place.geometry && place.geometry.location) {
      const latLng = place.geometry.location;
      placeMarker({ lat: latLng.lat(), lng: latLng.lng() });
      mapInstance.current?.panTo(latLng);
      mapInstance.current?.setZoom(14);

      if (locationInputRef.current)
        locationInputRef.current.value = place.name || "";
    }
  };

  // handleMapClick function that handles when the map is clicked
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      if (geocoder.current) {
        geocoder.current.geocode(
          { location: event.latLng },
          (results, status) => {
            if (
              status === google.maps.GeocoderStatus.OK &&
              results &&
              results[0]
            ) {
              const address = results[0].formatted_address;

              if (locationInputRef.current)
                locationInputRef.current.value = address;

              placeMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
            } else {
              console.error("Geocoder failed due to: " + status);
            }
          }
        );
      }
    } else {
      console.error("LatLng is null");
    }
  };

  // placeMarker function to place a marker on the map
  const placeMarker = (position: LatLng) => {
    if (selectedMarker.current) {
      selectedMarker.current.setPosition(position);
    } else {
      selectedMarker.current = new google.maps.Marker({
        position,
        map: mapInstance.current,
        title: "Selected Location",
      });
    }
    mapInstance.current?.panTo(position);
    mapInstance.current?.setZoom(14);
  };

  // calculateRoute function that calculates the route between two places
  const calculateRoute = () => {
    if (
      directionsService.current &&
      directionsRenderer.current &&
      fromInputRef.current &&
      toInputRef.current
    ) {
      const fromPlace = fromInputRef.current.value;
      const toPlace = toInputRef.current.value;

      if (fromPlace && toPlace) {
        directionsService.current.route(
          {
            origin: fromPlace,
            destination: toPlace,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsRenderer.current?.setDirections(result);
              mapInstance.current?.fitBounds(result.routes[0].bounds);

              const routeUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                fromPlace
              )}&destination=${encodeURIComponent(toPlace)}&travelmode=driving`;
              setRouteUrl(routeUrl);
            } else {
              console.error("Directions request failed due to " + status);
            }
          }
        );
      }
    }
  };

  // useCurrentLocationAsOrigin function to use the current location as the origin
  const useCurrentLocationAsOrigin = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const toPlace = toInputRef.current?.value;

          if (toPlace) {
            const locationUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
              toPlace
            )}&travelmode=driving`;
            setCurrentLocationUrl(locationUrl);
          } else {
            console.error("No destination selected.");
          }
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Initialize map and event listeners
  const initMap = useCallback(() => {
    if (mapRef.current && window.google && !mapInstance.current) {
      mapInstance.current = new google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 },
        zoom: 11,
      });

      directionsService.current = new google.maps.DirectionsService();
      directionsRenderer.current = new google.maps.DirectionsRenderer();
      geocoder.current = new google.maps.Geocoder();
      directionsRenderer.current.setMap(mapInstance.current);

      const fromAutocomplete = new google.maps.places.Autocomplete(
        fromInputRef.current!
      );
      const toAutocomplete = new google.maps.places.Autocomplete(
        toInputRef.current!
      );
      const locationAutocomplete = new google.maps.places.Autocomplete(
        locationInputRef.current!
      );

      fromAutocomplete.addListener("place_changed", () =>
        handlePlaceChanged(fromAutocomplete, "from")
      );
      toAutocomplete.addListener("place_changed", () =>
        handlePlaceChanged(toAutocomplete, "to")
      );
      locationAutocomplete.addListener("place_changed", () =>
        handleLocationPlaceChanged(locationAutocomplete)
      );

      mapInstance.current.addListener(
        "click",
        (event: google.maps.MapMouseEvent) => handleMapClick(event)
      );
    }
  }, [handleLocationPlaceChanged, handleMapClick, handlePlaceChanged]);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.google) {
      const existingScript = document.getElementById("google-maps-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.gomaps.pro/maps/api/js?key=${GOMAPS_API_KEY}&libraries=geometry,places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          setIsLoaded(true);
          initMap();
        };

        script.onerror = (e) => {
          console.error("Error loading Google Maps API: ", e);
        };

        document.head.appendChild(script);
      }
    } else if (window.google) {
      setIsLoaded(true);
      initMap();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current = null;
      }
    };
  }, [GOMAPS_API_KEY, initMap]);

  return (
    <div className="flex flex-col items-center mt-4  w-full">
      <textarea
        ref={locationInputRef}
        type="text"
        // {...isLocation}
        onChange={(e) => setIsLocation(e.target.value)}
        // placeholder="Search for a location"
        className="border text-wrap rounded-md w-full text-black mb-4 pl-2 pt-2 h-[100px]"
        onKeyPress={(e) =>
          e.key === "Enter" &&
          handleLocationPlaceChanged(
            new google.maps.places.Autocomplete(locationInputRef.current!)
          )
        }
      />
      <div
        className="h-[30vh] w-full border border-gray-300 rounded-md shadow-lg"
        ref={mapRef}
      ></div>
      {routeUrl && (
        <a
          href={routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Open Route in Google Maps
        </a>
      )}
      {/* <button
        onClick={useCurrentLocationAsOrigin}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Get Directions from My Location
      </button> */}
      {currentLocationUrl && (
        <a
          href={currentLocationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Open Directions in Google Maps
        </a>
      )}
    </div>
  );
};

export default MapSection;
