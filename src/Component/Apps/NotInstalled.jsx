import react from "react";
import ExtendedAccessibility from "../Icons/ExtendedAccessibility.png";
import { NavLink } from "react-router";
import ReturnIcon from "../Icons/Return.png";
import "../AppCss/Whatsapp.css";
import "../../App.css";
import UncheckedTrue from "../Icons/UncheckedTrue.png";
import CheckedFalse from "../Icons/CheckedFalse.png";
import ArrowRightDown from "../Icons/ArrowRightDown.png";
import WhatsappInstall from "../Icons/WhatsappInstall.png";

export default function NotInstalled() {
  return (
    <>
      <div className="MainWhatsapp">
        <div className="Buttons">
          <NavLink to="/Home/Whatsapp">
            <button className="Return">
              <img src={ReturnIcon}></img>חזרה
            </button>
          </NavLink>

          <div className="Question">
            <h3>?האפליקציה מותקנת</h3>
          </div>
          <button className="ExtendedAccessibilityWhatsapp">
            <img src={ExtendedAccessibility}></img>נגישות נוספת
          </button>
        </div>
        <div className="NotInstalled">
          <NavLink to="/Home/Whatsapp/Installed">
            <div className="Yes">
              <img src={UncheckedTrue}></img>
            </div>
          </NavLink>
          <img className="ArrowRightDown" src={ArrowRightDown}></img>
          <div className="No">
            <img src={CheckedFalse}></img>
          </div>
        </div>
        <div className="WhatsappInstall">
          <img src={WhatsappInstall}></img>
        </div>
        <div className="Install">
          <div className="InstallButton"></div>
        </div>
      </div>
    </>
  );
}
