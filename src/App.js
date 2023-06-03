import HomeContent from "./HomeContent";
import React, { useState, useEffect } from "react";
import "./style.scss";
import contents from "./Database";

const App = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [key, setKey] = useState(0);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <header className="header">
        <span className="logo" key={key}>LeMinhTuong</span>

        <nav className="navbar">
          <button
            className={activeButtonIndex === 0 ? "active" : ""}
            onClick={() => handleClick(0)}
          >
            Home
          </button>
          <button
            className={activeButtonIndex === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            About
          </button>
          <button
            className={activeButtonIndex === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            Portfolio
          </button>
          <button
            className={activeButtonIndex === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            Contact
          </button>
        </nav>
      </header>

      <div className="home" key={key}>
        {<HomeContent content={contents[activeButtonIndex]} />}
        <div className="home-sci">
          <a href="https://www.facebook.com/CallMeConal.mrT.091202/">
            {" "}
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/leminhtuong09122002/">
            {" "}
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/MinhTuongLe">
            {" "}
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
