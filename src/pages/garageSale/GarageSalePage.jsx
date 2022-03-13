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
import HorizontalProductCategoryList from "./HorizontalProductCategoryList";
import NoProductCategorySelected from "./NoProductCategorySelected";

const GarageSalePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [activeStore, setActiveStore] = useState(
    garageSaleStores.filter((store) => store.id === params.storeId)[0]
  );
  const [activeCategory, setActiveCategory] = useState(""); //Name of the active category

  useEffect(() => {
    if (activeStore === undefined) {
      navigate("/store-catalog");
    }
    const lastActiveCategory = localStorage.getItem("activeCategory");
    if (lastActiveCategory) {
      setActiveCategory(lastActiveCategory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeCategory", activeCategory);
  }, [activeCategory]);

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
          storeName={activeStore?.storeName}
          slogan={activeStore?.storeDescription.slogan}
          portraitUrl={activeStore?.storeVisualDescription.portraitUrl}
        />
      </div>
      <div className="store__categories-section">
        <HorizontalProductCategoryList
          setActiveCategory={setActiveCategory}
          productCategoryList={activeStore?.productCategoryList || []}
        />
      </div>
      <div className="any">
        {activeCategory ? (
          <>
            <SectionTitle
              sectionTitle={`Lista de productos de tipo ${activeCategory}`}
            />
          </>
        ) : (
          <NoProductCategorySelected />
        )}
      </div>
    </div>
  );
};

export default GarageSalePage;
