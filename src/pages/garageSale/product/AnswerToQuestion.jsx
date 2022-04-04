import React from "react";
import { useSelector } from "react-redux";
import { startPostAnswerToProductQuestion } from "../../../actions/storeCatalogActions";
import {
  sweetAlertForAnswerPublished,
  sweetAlertForQuestionPublished,
} from "../../../helpers/SweetalertBuilder";
import useForm from "../../../hooks/useForm";

const AnswerToQuestion = ({
  storeId,
  productId,
  categoryName,
  questionToAnswer,
  setQuestionListToShow,
}) => {
  const { auth } = useSelector((state) => state);
  const [formValues, handleInputChange, resetForm] = useForm({
    answerValue: "",
  });

  const { answerValue } = formValues;

  let getCurrentDate = (date) => new Date(date).toISOString().split("T")[0];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (answerValue.trim() === "") {
      resetForm({ answerValue: "" });
      return;
    }
    const theAnswer = {
      questionId: questionToAnswer.questionId,
      questionDate: questionToAnswer.questionDate,
      question: questionToAnswer.question,
      answerDate: getCurrentDate(new Date()),
      response: answerValue,
      customerId: questionToAnswer.customerId,
    };
    startPostAnswerToProductQuestion(
      storeId,
      productId,
      categoryName,
      theAnswer
    ).then((res) => {
      sweetAlertForAnswerPublished();
      resetForm({
        answerValue: "",
      });
      setQuestionListToShow((questionListToShow) => {
        return questionListToShow.map((question) => {
          if (question.id === theAnswer.questionId) {
            return {
              id: theAnswer.questionId,
              questionDate: theAnswer.questionDate,
              question: theAnswer.question,
              answerDate: theAnswer.answerDate,
              response: theAnswer.response,
              customerId: theAnswer.customerId,
            };
          }
          return question;
        });
      });
    });
  };

  return (
    <div className="product-question__container answer-question__container">
      <form
        onSubmit={handleAnswerSubmit}
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
            name="answerValue"
            value={answerValue}
            className="product-question__new-question-input"
            onChange={handleInputChange}
            maxLength="2000"
            placeholder="Escribe una respuesta a tu posible comprador..."
          />
          <button
            type="submit"
            className="product-question__new-question-button"
          >
            Responder
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerToQuestion;
