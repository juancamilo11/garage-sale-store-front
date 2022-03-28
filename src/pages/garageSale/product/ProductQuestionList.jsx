import React, { useEffect, useState } from "react";
import {
  startFetchUserInfo,
  startFetchUserInfoById,
  startFetchUsersInfoByIds,
} from "../../../actions/usersActions";
import ProductQuestionItem from "./ProductQuestionItem";

const ProductQuestionList = ({ productQuestionList, sellerId }) => {
  const [customersInfo, setCustomersInfo] = useState([]);
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    const usersIdList = productQuestionList.map(
      (productQuestion) => productQuestion.customerId
    );
    startFetchUsersInfoByIds([sellerId, ...usersIdList]).then(
      (customersInfo) => {
        setCustomersInfo(customersInfo);
      }
    );
    startFetchUserInfoById(sellerId).then((sellerInfoFromServer) => {
      setSellerInfo(sellerInfoFromServer);
    });
  }, []);

  const getCustomerInfo = (customerId) =>
    customersInfo?.find((customer) => customer?.id === customerId);

  return (
    <div>
      {JSON.stringify(sellerInfo)}
      {productQuestionList.map((productQuestion) => (
        <ProductQuestionItem
          {...productQuestion}
          customerInfo={getCustomerInfo(productQuestion.customerId)}
          sellerInfo={sellerInfo}
        />
      ))}
    </div>
  );
};

export default ProductQuestionList;
