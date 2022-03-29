import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ErrorFlag from "../../components/ErrorFlag";
import Footer from "../../components/Footer";
import NavBarStore from "../../components/navbar/NavBarStore";
import SectionTitle from "../../components/SectionTitle";
import GarageSaleHome from "./GarageSaleHome";
import HorizontalProductCategoryList from "./HorizontalProductCategoryList";
import NoProductCategorySelected from "./NoProductCategorySelected";
import StoreProductCategoryList from "./StoreProductCategoryList";

const GarageSalePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [activeStore, setActiveStore] = useState(
    garageSaleStores.filter((store) => store.id === params.storeId)[0]
  );
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (activeStore === undefined) {
      navigate("/store-catalog");
      return;
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
          activeCategory={activeCategory}
          productCategoryList={activeStore?.productCategoryList || []}
        />
      </div>
      {activeCategory && (
        <SectionTitle
          sectionTitle={`Lista de productos de tipo ${activeCategory}`}
        />
      )}
      <div className="store__products-section">
        {activeCategory ? (
          <>
            <StoreProductCategoryList
              productCategoryList={activeStore?.productCategoryList}
              activeCategory={activeCategory}
              storeId={params.storeId}
            />
          </>
        ) : (
          <NoProductCategorySelected />
        )}
      </div>

      <SectionTitle sectionTitle={`Ubicación física de la venta de garaje`} />

      <div className="store__map-section">
        <h6 className="store__map-title">
          Haz click sobre el mapa para ver la dirección física de la tienda
        </h6>
        <a
          href={`https://www.google.com/maps/@${activeStore?.storeAddress?.latitude},${activeStore?.storeAddress?.longitude},18z`}
          className="store__map-link"
          target="_blank"
        >
          <img
            className="store__map-img"
            src={process.env.PUBLIC_URL + "/assets/garage-store/map.png"}
            alt=""
          />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default GarageSalePage;
