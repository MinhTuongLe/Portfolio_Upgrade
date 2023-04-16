import HomeContent from "./HomeContent";
import React from "react";
import "./style.css";
import { useState } from "react";
import contents from "./Database";

const App = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <>
      <header className="header">
        <span className="logo">LeMinhTuong</span>

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

      <div className="home">
        {<HomeContent content={contents[activeButtonIndex]} />}
        <div className="home-sci">
          <a href="https://www.facebook.com/CallMeConal.mrT.091202/">
            {" "}
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/l%C3%AA-minh-t%C6%B0%E1%BB%9Dng-70bb0726a/">
            {" "}
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/MinhTuongLe">
            {" "}
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
