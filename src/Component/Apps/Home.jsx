import react from "react";
import { NavLink } from "react-router";
import WhatsappImage from "../Icons/Whatsapp.png";
import FacebookImage from "../Icons/Facebook.png";
import BituahLeumiImage from "../Icons/BituahLeumi.png";
import SearchIcon from "../Icons/Search.png";
import MicrophoneIcon from "../Icons/Microphone.png";
import ExtendedAccessibility from "../Icons/ExtendedAccessibility.png";

export default function Home() {
  const handleSearch = () => {
    const searchInput = document
      .querySelector(".SearchInput")
      .value.toLowerCase();
    if (searchInput.includes("facebook", "Facebook", "פייסבוק")) {
      window.location.href = "/Home/Facebook";
    } else if (searchInput.includes("whatsapp", "וואטסאפ")) {
      window.location.href = "/Home/Whatsapp";
    } else if (searchInput.includes("bituahleumi", "ביטוח לאומי")) {
      window.location.href = "/Home/BituahLeumi";
    } else {
      alert("No matching app found.");
    }
  };

  return (
    <>
      <div className="PageWrapper">
        <div className="Page">
          <div className="Main">
            <h1 className="MainTitle">?במה אפשר לעזור היום</h1>
            <div className="Search">
              <button className="SearchButton" onClick={handleSearch}>
                <img className="SearchIcon" src={SearchIcon}></img>חיפוש
              </button>
              <div className="Microphone">
                <button className="MicrophoneButton">
                  <img src={MicrophoneIcon}></img>
                </button>
                <input
                  className="SearchInput"
                  type="text"
                  placeholder="באיזה אפליקציה תרצה עזרה?"
                ></input>
              </div>
            </div>
            <button className="ExtendedAccessibility">
              <img src={ExtendedAccessibility}></img>נגישות נוספת
            </button>
            <p>:או תבחר מאחת האפליקציות כאן</p>
            <div className="Apps">
              <NavLink to="/Home/Whatsapp">
                <button className="App">
                  <img alt="WhatsappLogo" src={WhatsappImage}></img>וואטסאפ
                </button>
              </NavLink>
              <NavLink to="/Home/Facebook">
                <button className="App">
                  <img alt="FacebookLogo" src={FacebookImage}></img>פייסבוק
                </button>
              </NavLink>
              <NavLink to="/Home/BituahLeumi">
                <button className="App">
                  <img alt="BituahLeumiLogo" src={BituahLeumiImage}></img>ביטוח
                  לאומי
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
