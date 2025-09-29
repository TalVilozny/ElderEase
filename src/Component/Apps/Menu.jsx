import react from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import "../AppCss/Menu.css";
import SiteLogo from "../Icons/Logo.png";
import HomeIcon from "../MenuIcons/Homepage.png";
import ExitIcon from "../MenuIcons/Exit.png";
import HelpIcon from "../MenuIcons/Help.png";
import InformationIcon from "../MenuIcons/Information.png";
import SearchIcon from "../MenuIcons/Search.png";
import SettingsIcon from "../MenuIcons/Settings.png";
import UserIcon from "../MenuIcons/User.png";
import Home from "../Apps/Home";
import UserPFP from "../MenuIcons/UserPFP.png";

export default function Menu() {
  const [MenuIsOpen, SetMenuIsOpen] = useState(false);

  function OpenMenu() {
    SetMenuIsOpen(!MenuIsOpen);
  }
  return (
    <>
      <div className="MenuContainer">
        <div className="Menu">
          <div className="NameContainer">
            <img src={SiteLogo}></img>
            <div className="Name">
              <h3>עזרה נגישה</h3>
              <h4>אפליקציה לעזרה דיגטלית</h4>
            </div>
          </div>
          <div className="Line"></div>
          <div className="Options">
            <button>
              <img src={HomeIcon}></img>
              <h2>דף הבית</h2>
            </button>
            <button>
              <img src={SearchIcon}></img>
              <h2>חיפוש עזרה</h2>
            </button>
            <button>
              <img src={UserIcon}></img>
              <h2>פרופיל אישי</h2>
            </button>
            <button>
              <img src={SettingsIcon}></img>
              <h2>הגדרות</h2>
            </button>
            <button>
              <img src={HelpIcon}></img>
              <h2>עזרה ותמיכה</h2>
            </button>
            <button>
              <img src={InformationIcon}></img>
              <h2>מדריכים ומידע</h2>
            </button>
            <NavLink>
              <button onClick={<Home />}>
                <img src={ExitIcon}></img>
                <h2>יציאה</h2>
              </button>
            </NavLink>
          </div>
          <div className="UserContainer">
            <div className="User">
              <div className="MoreUserSettings">
                <div className="UserPFP">
                  <img src={UserPFP}></img>
                </div>
                <div className="NameAndEmail">
                  <h4>Username</h4>
                  <h5>Username@gmail.com</h5>
                </div>
              </div>
              <div className="LogIn">התחברות</div>
            </div>
          </div>
        </div>
        <div className="BlurBackground"></div>
      </div>
    </>
  );
}
