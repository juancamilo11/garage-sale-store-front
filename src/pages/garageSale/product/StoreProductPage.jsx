import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductStatusNameByNumber } from "../../../helpers/productStates";
import {
  sweeralertForShowProductImage,
  sweetalertForOrderCreationConfirmationBuilder,
} from "../../../helpers/SweetalertBuilder";
import NavBarFormUserData from "./../../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../../components/SectionTitle";
import ProductQuestionList from "./ProductQuestionList";
import Footer from "./../../../components/Footer";
import { startCreatePurchaseOrder } from "../../../actions/storeCatalogActions";
import { v4 as uuidv4 } from "uuid";

const StoreProductPage = () => {
  const params = useParams();
  const { id } = useSelector((state) => state.auth);
  const [productInfo, setProductInfo] = useState({});
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [storeInfo, setStoreInfo] = useState({});
  const [showedImageUrl, setShowedImageUrl] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(0);
  const [questionListToShow, setQuestionListToShow] = useState([]);

  useEffect(() => {
    setStoreInfo(
      garageSaleStores.filter((store) => store.id === params.storeId)[0]
    );
  });

  useEffect(() => {
    storeInfo?.productCategoryList?.map((productCategory) =>
      productCategory.productList.map((product) => {
        if (product.id === params.productId) {
          setProductInfo(product);
        }
      })
    );
  });

  useEffect(() => {
    setShowedImageUrl(
      process.env.PUBLIC_URL + "/assets/garage-store/select-image.png"
    );
  }, []);

  useEffect(() => {
    setQuestionListToShow(productInfo?.productQuestionList);
  }, [productInfo?.productQuestionList]);

  const handleAddOneProduct = (e) => {
    e.preventDefault();
    if (quantitySelected >= productInfo.quantity) return;
    setQuantitySelected(quantitySelected + 1);
  };

  const handleSubtractProduct = (e) => {
    e.preventDefault();
    if (quantitySelected <= 0) return;
    setQuantitySelected(quantitySelected - 1);
  };

  const handleChangeSelectedImage = (urlImage) => {
    setShowedImageUrl(urlImage);
  };

  const getDate = (date) => new Date(date).toISOString().split("T")[0];

  const handleCreatePurchaseOrder = (e) => {
    e.preventDefault();
    if (quantitySelected === 0) return;
    sweetalertForOrderCreationConfirmationBuilder(
      productInfo.productName,
      quantitySelected
    ).then((res) => {
      if (res.isConfirmed) {
        startCreatePurchaseOrder(
          uuidv4(),
          params.storeId,
          params.productId,
          storeInfo.sellerId,
          quantitySelected,
          id,
          getDate(Date.now())
        );
      }
    });
  };

  const handleShowImageInPopup = (e) => {
    e.preventDefault();
    sweeralertForShowProductImage(showedImageUrl, productInfo.productName);
  };

  const getProductStatus = () => {
    const status = productInfo?.productStatus?.split("_")[1] || 0;
    return getProductStatusNameByNumber(parseInt(status));
  };

  return (
    <div className="product-page__main-container">
      <NavBarFormUserData />
      <div className="product-page__main-section">
        <div className="product-page__images-container">
          <div className="product-page__down-scroll">
            {productInfo?.productImageUrlList?.map((imageUrl) => (
              <img
                onClick={(e) => handleChangeSelectedImage(imageUrl)}
                key={imageUrl}
                src={imageUrl}
                alt="product-img"
                className="product-page__down-scroll-item"
              />
            ))}
          </div>

          <div
            onClick={handleShowImageInPopup}
            className="product-page__showed-image"
            style={{ backgroundImage: `url(${showedImageUrl})` }}
          ></div>
        </div>

        <div className="product-page__product-info">
          <div className="product-page__product-name">
            <h2 className="product-page__product-name">
              {productInfo.productName}
            </h2>
            <hr />
          </div>
          <div className="product-page__product-status">
            <h4>Estado del producto: {getProductStatus()}</h4>
          </div>
          <hr />
          <div className="product-page__additional-information">
            <h5 className="product-page__additional-info-title">
              Unidades disponibles: {productInfo.quantity}
            </h5>
          </div>
          <div className="product-page__additional-information">
            <h5 className="product-page__additional-info-title">
              Información adicional
            </h5>
            <p>{productInfo.additionalDescription}</p>
          </div>
          <div className="product-page__tag-list">
            <h5 className="product-page__additional-info-title">Etiquetas</h5> -{" "}
            {productInfo.productTagList?.join(" | ")}
          </div>
          <div className="product-page__add-to-cart-container">
            <div className="product-page__action-buttons">
              <button
                className="product-page__action-button product-page__action-button--add"
                onClick={handleAddOneProduct}
              >
                +1
              </button>
              <button
                className="product-page__action-button product-page__action-button--subtract"
                onClick={handleSubtractProduct}
              >
                -1
              </button>
            </div>

            <span className="product-page__purchased-quantity">
              Cantidad a comprar: <b>{quantitySelected}</b>
            </span>
            <button
              className="product-page__buy-button"
              onClick={handleCreatePurchaseOrder}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="product-page__question-section">
        <div className="user-form-data__section-title">
          <SectionTitle sectionTitle="Preguntas acerca de este producto" />
        </div>
        <ProductQuestionList
          productQuestionList={questionListToShow || []}
          sellerId={storeInfo.sellerId}
          storeId={params.storeId}
          productId={params.productId}
          categoryName={params.categoryName}
          setQuestionListToShow={setQuestionListToShow}
        />
      </div>
      <Footer />
    </div>
  );
};

export default StoreProductPage;
