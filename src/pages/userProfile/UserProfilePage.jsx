import React from "react";
import HomeUserProfile from "../../components/gui/HomeUserProfile";
import UserPersonalData from "../../components/gui/UserPersonalData";

const UserProfilePage = () => {
  return (
    <div className="userprofile__main-container">
      <div className="userprofile__home-container">
        <HomeUserProfile />
      </div>

      <div className="userprofile__data-container">
        <UserPersonalData />
      </div>
    </div>
  );
};

export default UserProfilePage;
