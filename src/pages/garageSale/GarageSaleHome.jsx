import React from "react";

const GarageSaleHome = ({ storeName, slogan, portraitUrl }) => {
  return (
    <div className="userprofile__main-container">
      <div
        className="userprofile__home-background"
        style={{
          backgroundImage: `url(${portraitUrl})`,
        }}
      ></div>

      <div className="userprofile__home-content store__home-content">
        <div className="userprofile__home-description store__home-description">
          <h1 className="userprofile__home-name store__home-name">
            {storeName}
          </h1>
          <h3 className="userprofile__home-name store__home-slogan">
            {slogan}
          </h3>
          <a
            href="#hcategory-list__main-container"
            className="store__home-button"
          >
            Empezar a explorar la tienda
          </a>
        </div>
      </div>
    </div>
  );
};

export default GarageSaleHome;
