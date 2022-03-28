import React, { useState } from "react";
import { useSelector } from "react-redux";
import { startPostNewQuestionToProduct } from "../../../actions/storeCatalogActions";
import useForm from "../../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

const NewQuestionToProduct = ({
  storeId,
  productId,
  categoryName,
  setQuestionListToShow,
}) => {
  const { auth } = useSelector((state) => state);
  const [formValues, handleInputChange, resetForm] = useForm({
    questionValue: "",
  });

  const { questionValue } = formValues;

  let getCurrentDate = (date) => new Date(date).toISOString().split("T")[0];

  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      questionId: uuidv4(),
      questionDate: getCurrentDate(new Date()),
      question: questionValue,
      answerDate: getCurrentDate(new Date()),
      response: "",
      customerId: auth.id,
    };
    startPostNewQuestionToProduct(
      storeId,
      productId,
      categoryName,
      newQuestion
    ).then((res) => {
      setQuestionListToShow((setQuestionListToShow) => {
        return [newQuestion, ...setQuestionListToShow];
      });
      resetForm({
        questionValue: "",
      });
    });
  };

  return (
    <div className="product-question__container">
      <form
        onSubmit={handleQuestionSubmit}
        className="product-question__question-container"
      >
        <div className="product-question__customer-photo-container">
          <img
            src={auth?.photoUrl}
            alt="customer-pic"
            className="product-question__customer-photo"
          />
        </div>
        <div className="product-question__question-content">
          <h5 className="product-question__customer-name">{auth?.name}</h5>
          <textarea
            name="questionValue"
            value={questionValue}
            className="product-question__new-question-input"
            onChange={handleInputChange}
            maxLength="1000"
            placeholder="Escribe una pregunta al vendedor..."
          />
          <button
            type="submit"
            className="product-question__new-question-button"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewQuestionToProduct;
