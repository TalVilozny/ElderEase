import react from "react";
import ExtendedAccessibility from "../Icons/ExtendedAccessibility.png";
import { NavLink } from "react-router";
import ReturnIcon from "../Icons/Return.png";
import "../AppCss/Facebook.css";
import "../../App.css";

export default function Facebook() {
  return (
    <>
      <div className="MainFacebook">
        <div className="Buttons">
          <NavLink to="/Home">
            <button className="Return">
              <img src={ReturnIcon}></img>חזרה
            </button>
          </NavLink>
          <button className="ExtendedAccessibilityFacebook">
            <img src={ExtendedAccessibility}></img>נגישות נוספת
          </button>
        </div>
        <h1>פייסבוק</h1>
      </div>
    </>
  );
}
