import React,{useState} from "react";
import logoImagen from "../../assets/globant.png";
import "./Navbar.css";

const Navbar = () => {
  // state to store wich tab is active
  const [activeTab, setActiveTab] = useState("Overview");


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

      <button className="new-button">+ NEW</button>
    </nav>
  );
};

export default Navbar;