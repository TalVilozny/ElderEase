import react from "react";
import ExtendedAccessibility from "../Icons/ExtendedAccessibility.png";
import { NavLink, Routes, Route } from "react-router";
import ReturnIcon from "../Icons/Return.png";
import "../AppCss/Whatsapp.css";
import "../../App.css";
import WhatsappImage from "../Icons/Whatsapp.png";
import BituahLeumiImage from "../Icons/BituahLeumi.png";
import FacebookImage from "../Icons/Facebook.png";
import UncheckedFalse from "../Icons/UncheckedFalse.png";
import UncheckedTrue from "../Icons/UncheckedTrue.png";
import Arrow from "../Icons/ArrowRight.png";

export default function Installed() {
  return (
    <>
      <div className="MainWhatsapp">
        <div className="Buttons">
          <NavLink to="/Home/Whatsapp">
            <button className="Return">
              <img src={ReturnIcon}></img>חזרה
            </button>
          </NavLink>
          <button className="ExtendedAccessibilityWhatsapp">
            <img src={ExtendedAccessibility}></img>נגישות נוספת
          </button>
        </div>
        <h1>Installed</h1>
      </div>
    </>
  );
}
