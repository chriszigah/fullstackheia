import React from "react";
import ImageSlider from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <img class="logo" src="/img/logo.svg" alt="heia-logo" />
          <a href="/" class="brand-logo">
            {" "}
            HEIA{" "}
          </a>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            <span class="material-symbols-rounded"> menu </span>
          </a>
          <ul class="nav-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/login.html">Student Login</a>
            </li>
            <li>
              <a href="/login.html">Teacher Login</a>
            </li>
            <li>
              <a href="login.html">Parent Login</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="login.html">Student Login</a>
            </li>
            <li>
              <a href="login.html">Teacher Login</a>
            </li>
            <li>
              <a href="login.html">Parent Login</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <ImageSlider />
    </>
  );
};

export default Home;
