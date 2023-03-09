import React from "react";
import { useState } from "react";
import "./navbar.css";

function Navigasi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="judul">SEVIMA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/learning">Learning</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Join</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navigasi;
