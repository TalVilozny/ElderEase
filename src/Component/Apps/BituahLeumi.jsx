import react from "react";
import ExtendedAccessibility from "../Icons/ExtendedAccessibility.png";
import { NavLink } from "react-router";
import ReturnIcon from "../Icons/Return.png";
import "../AppCss/BituahLeumi.css";
import "../../App.css";

export default function BituahLeumi() {
  return (
    <>
      <div className="MainBituahLeumi">
        <div className="Buttons">
          <NavLink to="/Home">
            <button className="Return">
              <img src={ReturnIcon}></img>חזרה
            </button>
          </NavLink>
          <button className="ExtendedAccessibilityBituahLeumi">
            <img src={ExtendedAccessibility}></img>נגישות נוספת
          </button>
        </div>
        <h1>ביטוח לאומי</h1>
      </div>
    </>
  );
}
