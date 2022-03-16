import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductImagesSlider from "./ProductImagesSlider";

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
      productInfo?.productImageUrlList?.find((urlImage) => urlImage !== "")
    );
  });

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

  return (
    <div className="product-page__main-container">
      <div className="product-page__main-section">
        <div className="product-page__images-container">
          <div className="product-page__down-scroll">
            {productInfo?.productImageUrlList?.map((imageUrl) => (
              <img key={imageUrl} src={imageUrl} alt="product-img" />
            ))}
          </div>
          <div className="product-page__showed-image">
            <img src={showedImageUrl} alt="showed-img" />
          </div>
        </div>
        <div className="product-page__product-info">
          <div className="product-page__product-name">
            <h2>{productInfo.productName}</h2>
            <hr />
          </div>
          <div className="product-page__product-name">
            <h4>{productInfo.productName}</h4>
            <hr />
          </div>
          <h6>Unidades disponibles: {productInfo.quantity}</h6>
          <div className="product-page__additional-information">
            <h5>Información adicional</h5>
            <p>{productInfo.additionalDescription}</p>
          </div>
          <div className="product-page__tag-list">
            <h5>Etiquetas</h5>- {productInfo.productTagList?.join(" | ")}
          </div>
          <div className="product-page__add-to-cart-container">
            <button onClick={handleAddOneProduct}>+1</button>
            <button onClick={handleSubtractProduct}>-1</button>
            <div>Cantidad a comprar: {quantitySelected}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProductPage;

/*
id,
productName,
additionalDescription,
price,
quantity,
productStatus,
productImageUrlList,
productTagList,
*/
