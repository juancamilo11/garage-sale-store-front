import React from "react";

import Footer from "../../components/Footer";
import HomeUserProfile from "../../components/user-profile/HomeUserProfile";
import NavBarUserProfile from "../../components/navbar/NavBarUserProfile";
import UserPersonalData from "../../components/user-profile/UserPersonalData";
import SectionTitle from "../../components/SectionTitle";
import FavoriteProductList from "../../components/user-profile/FavoriteProductList";
import FavoriteStoreList from "../../components/user-profile/FavoriteStoreList";
import StoreList from "../../components/user-profile/StoreList";
import TransactionList from "../../components/user-profile/TransactionList";

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

      {/* <SectionTitle sectionTitle="Historial de tus compras" />
      <div
        className="userprofile__purchases-container"
        id="transaction-card-list__section"
      >
        <TransactionList transactionType="buy" />
      </div>

      <SectionTitle sectionTitle="Historial de tus ventas" />
      <div className="userprofile__sales-container">
        <TransactionList transactionType="sell" />
      </div>

      <SectionTitle sectionTitle="Tus tiendas favoritas" />
      <div
        className="userprofile__fav-stores-container"
        id="favorite-store-list__section"
      >
        <FavoriteStoreList />
      </div>

      <SectionTitle sectionTitle="Tus productos favoritos" />
      <div className="userprofile__fav-products-container">
        <FavoriteProductList />
      </div> */}
      <Footer />
    </div>
  );
};

export default UserProfilePage;
