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
import NotInstalled from "./NotInstalled";

export default function Whatsapp() {
  return (
    <>
      <div className="MainWhatsapp">
        <div className="Buttons">
          <NavLink to="/Home">
            <button className="Return">
              <img src={ReturnIcon}></img>חזרה
            </button>
          </NavLink>
          <button className="ExtendedAccessibilityWhatsapp">
            <img src={ExtendedAccessibility}></img>נגישות נוספת
          </button>
        </div>
        <div className="Apps">
          <button disabled className="App Clicked">
            <img alt="WhatsappLogo" src={WhatsappImage}></img>וואטסאפ
          </button>
          <button disabled className="App Unclicked">
            <img alt="FacebookLogo" src={FacebookImage}></img>פייסבוק
          </button>
          <button disabled className="App Unclicked">
            <img alt="BituahLeumiLogo" src={BituahLeumiImage}></img>ביטוח לאומי
          </button>
        </div>
        <div className="Question">
          <img className="Arrow" src={Arrow}></img>
          <h3>?האפליקציה מותקנת</h3>
        </div>
        <div className="QuestionContainer">
          <div className="Transparent"></div>
          <div className="YesOrNo">
            <NavLink to="/Home/Whatsapp/Installed">
              <div className="Yes">
                <img src={UncheckedTrue}></img>
              </div>
            </NavLink>
            <NavLink
              to="/Home/Whatsapp/NotInstalled"
              element={<NotInstalled />}
            >
              <div className="No">
                <img src={UncheckedFalse}></img>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
