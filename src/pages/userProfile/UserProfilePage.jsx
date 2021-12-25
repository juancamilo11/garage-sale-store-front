import React from "react";
import FavoriteProductList from "../../components/gui/FavoriteProductList";
import FavoriteStoreList from "../../components/gui/FavoriteStoreList";
import Footer from "../../components/gui/Footer";
import HomeUserProfile from "../../components/gui/HomeUserProfile";
import NavBar from "../../components/gui/NavBar";
import SectionTitle from "../../components/gui/SectionTitle";
import StoreCardList from "../../components/gui/StoreCardList";
import TransactionCardList from "../../components/gui/TransactionCardList";
import UserPersonalData from "../../components/gui/UserPersonalData";

const UserProfilePage = () => {
  return (
    <div className="userprofile__main-container">
      <NavBar />
      <div className="userprofile__home-container">
        <HomeUserProfile />
      </div>

      <SectionTitle sectionTitle="Información Personal" />
      <div className="userprofile__data-container">
        <UserPersonalData />
      </div>

      <SectionTitle sectionTitle="Tus tiendas activas" />
      <div className="userprofile__stores-container">
        <StoreCardList />
      </div>

      <SectionTitle sectionTitle="Historial de tus compras" />
      <div className="userprofile__purchases-container">
        <TransactionCardList />
      </div>

      <SectionTitle sectionTitle="Historial de tus ventas" />
      <div className="userprofile__sales-container">
        <TransactionCardList />
      </div>

      <SectionTitle sectionTitle="Tus tiendas favoritas" />
      <div className="userprofile__fav-stores-container">
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
