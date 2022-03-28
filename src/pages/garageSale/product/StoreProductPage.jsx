import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductStatusNameByNumber } from "../../../helpers/productStates";
import {
  sweeralertForShowProductImage,
  sweetalertForOrderCreationConfirmationBuilder,
} from "../../../helpers/SweetalertBuilder";
import ProductImagesSlider from "./ProductImagesSlider";
import NavBarFormUserData from "./../../../components/navbar/NavBarFormUserData";
import SectionTitle from "../../../components/SectionTitle";
import ProductQuestionList from "./ProductQuestionList";

const productQuestionList = [
  {
    questionDate: "2022-03-03",
    answerDate: "2022-03-05",
    question: "Hola, pregunta de prueba 1",
    response: "hola, respuesta de prueba 1",
    customerId: "Tg2h8glzNLed8cpwyecdBnq6BT93",
  },
  {
    questionDate: "2022-03-22",
    answerDate: "2022-03-23",
    question:
      "Hola, pregunta de prueba 2Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1",
    response:
      "Hola, pregunta de prueba 2Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1Hola, pregunta de prueba 1",
    customerId: "ctxyFJcUhscbrjBOMWyCo6s1mZp2",
  },
  {
    questionDate: "2022-03-12",
    answerDate: "2022-03-13",
    question: "Hola, pregunta de prueba 3",
    response: "hola, respuesta de prueba 4",
    customerId: "ctxyFJcUhscbrjBOMWyCo6s1mZp2",
  },
];

const StoreProductPage = ({}) => {
  const params = useParams();
  const [productInfo, setProductInfo] = useState({});
  const { garageSaleStores } = useSelector((state) => state.stores);
  const [storeInfo, setStoreInfo] = useState({});
  const [showedImageUrl, setShowedImageUrl] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(0);

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

  const handleCreatePurchaseOrder = (e) => {
    e.preventDefault();
    if (quantitySelected === 0) return;
    sweetalertForOrderCreationConfirmationBuilder(
      productInfo.productName,
      quantitySelected
    );
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
          productQuestionList={productQuestionList}
          sellerId={storeInfo.sellerId}
        />
      </div>
    </div>
  );
};

export default StoreProductPage;
