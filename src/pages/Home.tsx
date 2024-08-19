import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import MobileMenu from "../components/MobileMenu";

import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarWidth, setSidebarWidth] = useState(270); // Default width

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  return (
    <div id="home" className="App flex h-full">
      <div className="bg-[#1e1e1e] h-full">
        {activeTab === "home" && (
          <div >
            <Header />
            <About />
            <Resume />
            <Contact />
          </div>
        )}
        {activeTab === "about" &&  <div style={{ paddingLeft: `${sidebarWidth}px` }}><About /></div>}
        {activeTab === "resume" && <div style={{ paddingLeft: `${sidebarWidth}px` }}><Resume /></div>}
        {activeTab === "contact" && <div style={{ paddingLeft: `${sidebarWidth}px` }}><Contact /></div>}
      </div>
    </div>
  );
};

export default Home;
