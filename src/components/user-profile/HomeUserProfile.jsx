import React from "react";
import { useSelector } from "react-redux";
import { getColombianStateFlagByValue } from "../../helpers/colombianStatesList";
import ButtonCreateNewStore from "../ButtonCreateNewStore";

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

      <div className="userprofile__home-content">
        <picture>
          <img
            className="userprofile__profile-picture"
            src={auth.photoUrl}
            alt="User profile photo"
          />
        </picture>
        <div className="userprofile__home-description">
          <h1 className="userprofile__home-name">{auth.name}</h1>
          <h3>{auth.colombianState}</h3>
          <img
            className="userprofile__nationality-flag"
            src={getColombianStateFlagByValue(auth.colombianState)}
            alt="Nationality flag"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeUserProfile;
