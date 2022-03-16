import React from "react";

const ProductImagesSlider = ({ productInfo, showedImageUrl }) => {
  return (
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
  );
};

export default ProductImagesSlider;
