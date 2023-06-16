import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppScreen;
