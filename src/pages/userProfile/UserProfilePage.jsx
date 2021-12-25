import React from "react";
import FavoriteProductList from "../../components/gui/FavoriteProductList";
import FavoriteStoreList from "../../components/gui/FavoriteStoreList";
import Footer from "../../components/gui/Footer";
import HomeUserProfile from "../../components/gui/HomeUserProfile";
import NavBarUserProfile from "../../components/gui/navbar/NavBarUserProfile";
import SectionTitle from "../../components/gui/SectionTitle";
import StoreCardList from "../../components/gui/StoreCardList";
import TransactionCardList from "../../components/gui/TransactionCardList";
import UserPersonalData from "../../components/gui/UserPersonalData";

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
        <StoreCardList />
      </div>

      <SectionTitle sectionTitle="Historial de tus compras" />
      <div
        className="userprofile__purchases-container"
        id="transaction-card-list__section"
      >
        <TransactionCardList />
      </div>

      <SectionTitle sectionTitle="Historial de tus ventas" />
      <div className="userprofile__sales-container">
        <TransactionCardList />
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
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
