
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import { useSelector } from "react-redux";
import SideNav from "./components/SideNav";

function App() {
  const isToggle = useSelector(store => store.toggle.toggleSideNave);
  return (
    <>
      <Header/>
      <div className="flex">
        {isToggle && <SideNav />}
        <Outlet/>
      </div>
    </>     
  );
}

export default App;
