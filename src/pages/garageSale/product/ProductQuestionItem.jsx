import React from "react";

const ProductQuestionItem = ({
  questionDate,
  answerDate,
  question,
  response,
  customerId,
  customerInfo,
  sellerInfo,
}) => {
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

      <div className="product-question__question-container product-question__answer-container">
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
          <p className="product-question__question">{response}</p>
          <p className="product-question__question-date">{answerDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductQuestionItem;
