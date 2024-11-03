// src/header/header.js
import React from "react";
import logo from "../img/logo.png"; // Đường dẫn tới logo
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <div className="app-name">Spotify</div>
        </div>
    );
}
