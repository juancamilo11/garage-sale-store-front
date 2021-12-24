import React from "react";
import { useSelector } from "react-redux";

const HomeUserProfile = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="userprofile__main-container">
      <div
        className="userprofile__home-background"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/user-profile/user-home-photo.jpg"
          })`,
        }}
      ></div>

      <picture>
        <img
          className="userprofile__profile-picture"
          src={auth.photoUrl}
          alt="uUer profile photo"
        />
      </picture>
      <div className="userprofile__home-description">
        <h1 className="userprofile__home-name">{auth.name}</h1>
        <img
          className="userprofile__nationality-flag"
          src={
            process.env.PUBLIC_URL + "/assets/user-profile/nationality-flag.svg"
          }
          alt="Nationality flag"
        />
      </div>
    </div>
  );
};

export default HomeUserProfile;
