import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setNoActiveStore } from "../../actions/storeCatalogActions";
import NavBarStore from "../../components/navbar/NavBarStore";
import NavBarUserProfile from "../../components/navbar/NavBarUserProfile";
import SectionTitle from "../../components/SectionTitle";
import HomeUserProfile from "../../components/user-profile/HomeUserProfile";
import UserPersonalData from "../../components/user-profile/UserPersonalData";
import GarageSaleHome from "./GarageSaleHome";

const GarageSalePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [activeStore, setActiveStore] = useState(
    garageSaleStores.filter((store) => store.id === params.storeId)[0]
  );

  useEffect(() => {
    if (activeStore === undefined) {
      navigate("/store-catalog");
    }
  }, []);

  return (
    // <h1>Venta de garaje {params.storeId}</h1>
    //TODO -> Proteger esta ruta, cuando se cambie manualmente el Id del store, crear una vista de error y redirigir hacia allá
    <div className="userprofile__main-container">
      <NavBarStore />
      <div
        className="userprofile__home-container"
        id="navbar-user-profile__section"
      >
        <GarageSaleHome
          storeName={activeStore.storeName}
          slogan={activeStore.storeDescription.slogan}
          portraitUrl={activeStore.storeVisualDescription.portraitUrl}
        />
      </div>
      <div
        className="userprofile__data-container"
        id="user-personal-data__section"
      ></div>
      <SectionTitle sectionTitle="Lista de productos" />
    </div>
  );
};

export default GarageSalePage;
