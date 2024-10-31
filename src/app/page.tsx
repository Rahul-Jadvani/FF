import Link from "next/link";
import '@fontsource/orbitron'; // Import Orbitron font
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen w-screen items-center justify-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
        src="/video.mp4" // Replace with actual video path
        autoPlay
        loop
        muted
      />

      <Image src={"/PLOREX.png"} alt="PLOREX logo" width={400} height={400}/>

      {/* Main Heading */}
      <Link href="/main">
        <h1 className="text-outline text-black hover:text-black duration-500  font-semibold text-6xl md:text-9xl font-orbitron z-10">
        SPACE-X-PLORE
      </h1>
      </Link>
        <p className="max-w-[1200px] text-center text-2xl tracking-wider font-semibold text-outline">
          Explore the Cosmos in 3D – Journey through the Solar System, Asteroids, Satellites, and Constellations. Dive into the mysteries of Near-Earth Objects with interactive models and uncover the wonders of space like never before.
        </p>
      {/* Explore Button */}
      <div className="flex items-center justify-center">
        <Link href="/main">
          <button className="bg-transparent text-outline text-lg font-extrabold text-black p-3 rounded-xl border-2 hover:border-black hover:bg-black hover:text-white hover:shadow-sm hover:scale-105 duration-500 backdrop-blur-lg hover:shadow-white">
            X-PLORE
          </button>
        </Link>
      </div>
    </div>
  );
}
