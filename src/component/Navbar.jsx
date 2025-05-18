import React from "react";
import { Link } from "react-router-dom";
import Honey from "../assets/Chaska.mp3";

export default function Navbar() {
  const honeySong = new Audio(Honey);
  function playSong() {
    honeySong.play();
  }
  function stopSong(){
    honeySong.pause()
      }
  return (
    <div className="Navbar">
      <div className="icon">
        {/* 🗿 */}{" "}
        <Link to="home" onClick={playSong} style={{ textDecoration: "none" }}>
          {" "}
          💵
        </Link>
      </div>

      <div className="header">
        <Link to="home" onClick={stopSong}>
          {" "}
          <h1> BrainsHoD</h1>
        </Link>
      </div>

      <div className="info">
        <Link to="about" style={{ textDecoration: "none" }}>
          {" "}
          About Us{" "}
        </Link>
        <a>|</a>
        <Link to="contact" style={{ textDecoration: "none" }}>
          {" "}
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}
