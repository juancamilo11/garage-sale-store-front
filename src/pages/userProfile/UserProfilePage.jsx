import React from "react";

import Footer from "../../components/Footer";
import HomeUserProfile from "../../components/user-profile/HomeUserProfile";
import NavBarUserProfile from "../../components/navbar/NavBarUserProfile";
import UserPersonalData from "../../components/user-profile/UserPersonalData";
import SectionTitle from "../../components/SectionTitle";
import StoreList from "../../components/user-profile/StoreList";

const UserProfilePage = () => {
  return (
    <div className="userprofile__main-container">
      <NavBarUserProfile />
      <div
        className="userprofile__home-container"
        id="navbar-user-profile__section"
      >
        <HomeUserProfile />
      </div>

      <SectionTitle sectionTitle="Información Personal" />
      <div
        className="userprofile__data-container"
        id="user-personal-data__section"
      >
        <UserPersonalData />
      </div>

      <SectionTitle sectionTitle="Tus tiendas activas" />
      <div
        className="userprofile__stores-container"
        id="store-card-list__section"
      >
        <StoreList />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
