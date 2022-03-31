import React from "react";
import { useSelector } from "react-redux";
import AnswerToQuestion from "./AnswerToQuestion";

const ProductQuestionItem = ({
  id: questionId,
  questionDate,
  answerDate,
  question,
  response,
  customerId,
  customerInfo,
  sellerInfo,
  storeId,
  productId,
  categoryName,
  setQuestionListToShow,
}) => {
  const { id } = useSelector((state) => state.auth);

  const getQuestionToAnswer = () => {
    return {
      questionId,
      questionDate,
      question,
    };
  };

  return (
    <div className="product-question__container">
      <div className="product-question__question-container">
        <div className="product-question__customer-photo-container">
          <img
            src={customerInfo?.photoUrl}
            alt="customer-pic"
            className="product-question__customer-photo"
          />
        </div>
        <div className="product-question__question-content">
          <h5 className="product-question__customer-name">
            {customerInfo?.name}
          </h5>
          <p className="product-question__question">{question}</p>
          <p className="product-question__question-date">{questionDate}</p>
        </div>
      </div>
      <div className="product-question__separator">
        <hr />
      </div>
      {response !== "" && (
        <div className="product-question__question-container product-question__answer-container">
          <div className="product-question__customer-photo-container">
            <img
              src={sellerInfo?.photoUrl}
              alt="customer-pic"
              className="product-question__customer-photo"
            />
          </div>
          <div className="product-question__question-content">
            <h5 className="product-question__customer-name">
              {sellerInfo?.name}
            </h5>
            <p className="product-question__question">{response}</p>
            <p className="product-question__question-date">{answerDate}</p>
          </div>
        </div>
      )}
      {response === "" && sellerInfo?.id === id && (
        <AnswerToQuestion
          storeId={storeId}
          productId={productId}
          categoryName={categoryName}
          questionToAnswer={getQuestionToAnswer()}
          setQuestionListToShow={setQuestionListToShow}
        />
      )}
    </div>
  );
};

export default ProductQuestionItem;
