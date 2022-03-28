import React, { useEffect, useState } from "react";
import ProductQuestionItem from "./ProductQuestionItem";

const ProductQuestionList = ({ productQuestionList }) => {
  const [customersInfo, setCustomersInfo] = useState([]);
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    const usersIdList = productQuestionList.map(
      (productQuestion) => productQuestion.customerId
    );
    // startFetchUsersInfoById([, ...usersIdList]).then(customersInfo => {
    //     setCustomersInfo(customersInfo);
    // });
  }, []);

  return (
    <div>
      {/* {JSON.stringify(productQuestionList)} */}
      {productQuestionList.map((productQuestion) => (
        <ProductQuestionItem
          {...productQuestion}
          customerInfo={customersInfo}
          sellerInfo={sellerInfo}
        />
      ))}
    </div>
  );
};

export default ProductQuestionList;
