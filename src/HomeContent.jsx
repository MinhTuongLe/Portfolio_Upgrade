import React from "react";
import "./style.scss";

const HomeContent = ({ content }) => {
  return (
    <div className="home-content">
      <h1>{content.h1Content}</h1>
      <h3>{content.h3Content}</h3>
      <p>{content.pContent}</p>
      <div className="btn-box">
        <a href="https://www.topcv.vn/xem-cv/BlJUWgQAAAtUAAMKAAJQUVUKVgNQVQUICgICAw6cb2">Hire Me</a>
        <a href="https://www.facebook.com/CallMeConal.mrT.091202/">Let's chat!</a>
      </div>
    </div>
  );
};

export default HomeContent;
