import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import Facebook from "./Component/Apps/Facebook";
import BituahLeumi from "./Component/Apps/BituahLeumi";
import Whatsapp from "./Component/Apps/Whatsapp";
import SiteLogo from "./Component/Icons/Logo.png";
import Menu from "./Component/Apps/Menu";
import HamburgerMenu from "./Component/Icons/Hamburger.png";
import Home from "./Component/Apps/Home";
import NotInstalled from "./Component/Apps/NotInstalled";
import Installed from "./Component/Apps/Installed";
import "./App.css";

function App() {
  const [MenuIsOpen, SetMenuIsOpen] = useState(false);

  function OpenMenu() {
    SetMenuIsOpen(!MenuIsOpen);
  }

  return (
    <>
      <div className="PageWrapper">
        <div className="Page">
          {MenuIsOpen && <Menu />}
          <div className="Navbar">
            <button onClick={OpenMenu} className="HamburgerMenu">
              <img src={HamburgerMenu}></img>
            </button>

            <div className="Logo">
              <h3>עזרה נגישה</h3>
              <img alt="SiteLogo" src={SiteLogo}></img>
            </div>
          </div>
          <Routes>
            <Route
              path="/Home/Whatsapp/Installed"
              element={<Installed />}
            ></Route>
            <Route
              path="/Home/Whatsapp/NotInstalled"
              element={<NotInstalled />}
            ></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Home/Whatsapp" element={<Whatsapp />}></Route>
            <Route path="/Home/Facebook" element={<Facebook />}></Route>
            <Route path="/Home/BituahLeumi" element={<BituahLeumi />}></Route>
            <Route
              path="*"
              element={
                <>
                  <h1>Error 404: Route does not exist!</h1>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
