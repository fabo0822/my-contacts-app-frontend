import React,{useState} from "react";
import logoImagen from "../../assets/globant.png";
import "./Navbar.css";
import Popup from "../Popup/popup";

const Navbar = () => {
  // state to store wich tab is active
  const [activeTab, setActiveTab] = useState("Overview");
  const [popupOpen, setPopupOpen] = useState(false);


  //funtion to change the active tab when user clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }
  return (
    <nav className="navbar">
      <img src={logoImagen} alt="Logo" className="logo" />
      <ul className="tabs">
        <li className={activeTab === "Overview" ? "active" : ""} onClick={() => handleTabClick("Overview")}> Overview</li>
        <li className={activeTab === "Contacts" ? "active" : ""} onClick={() => handleTabClick("Contacts")}> Contacts</li>
        <li className={activeTab === "Favorites" ? "active" : ""} onClick={() => handleTabClick("Favorites")}> Favorites</li>
      </ul>

      <button className="new-button" onClick={() => setPopupOpen(true)}>+ NEW</button>
      <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)}>
        <h2>New Contact</h2>
        <input type="text" placeholder="First Name" className="popup-input" />
        <input type="text" placeholder="Last Name"  className="popup-input" />
        <input type="email" placeholder="Email"     className="popup-input" />
        <input type="file" className="popup-input" />
        <input type="checkbox" className="popup-checkbox" /> 
      </Popup>
    </nav>
  );
};

export default Navbar;