import NFTCollection from "../homepage/NFTCollection";
import Achievements from "./Achievements";
import DAOPanel from "./DAOPanel";
import DashboardLayout from "./DashboardLayout";
import FoodFlagsTracker from "./FoodFlagsTracker";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  function opensidebar() {
    return true;
  }
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar isOpen={true} setIsOpen={() => opensidebar} />
      <Achievements />
      <DAOPanel />
      <DashboardLayout />
      <FoodFlagsTracker />
      <NFTCollection />
    </div>
  );
}
