import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  startFetchUserInfo,
  startFetchUserInfoById,
  startFetchUsersInfoByIds,
} from "../../../actions/usersActions";
import NewQuestionToProduct from "./NewQuestionToProduct";
import ProductQuestionItem from "./ProductQuestionItem";

const ProductQuestionList = ({
  productQuestionList,
  sellerId,
  storeId,
  productId,
  categoryName,
  setQuestionListToShow,
}) => {
  const { auth } = useSelector((state) => state);
  const [customersInfo, setCustomersInfo] = useState([]);
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    const usersIdList = productQuestionList?.map(
      (productQuestion) => productQuestion.customerId
    );
    startFetchUsersInfoByIds([sellerId, ...usersIdList]).then(
      (customersInfo) => {
        setCustomersInfo(customersInfo);
      }
    );
  }, [customersInfo]);

  useEffect(() => {
    startFetchUserInfoById(sellerId).then((sellerInfoFromServer) => {
      setSellerInfo(sellerInfoFromServer);
    });
  }, [sellerInfo]);

  const getCustomerInfo = (customerId) =>
    customersInfo?.find((customer) => customer?.id === customerId);

  return (
    <div>
      {sellerId !== auth.id && (
        <NewQuestionToProduct
          storeId={storeId}
          productId={productId}
          categoryName={categoryName}
          setQuestionListToShow={setQuestionListToShow}
        />
      )}

      {productQuestionList?.map((productQuestion) => (
        <ProductQuestionItem
          {...productQuestion}
          customerInfo={getCustomerInfo(productQuestion.customerId)}
          sellerInfo={sellerInfo}
          storeId={storeId}
          productId={productId}
          categoryName={categoryName}
          setQuestionListToShow={setQuestionListToShow}
        />
      ))}
    </div>
  );
};

export default ProductQuestionList;
