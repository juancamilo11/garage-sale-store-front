import React from "react";
import PurchaseTestimonial from "./PurchaseTestimonial";

const purchaseTestimonialListFake = [];

const StoreTestimonialList = ({ purchaseTestimonialList }) => {
  return (
    <div className="testimonials__main-container">
      {purchaseTestimonialListFake.map((testimonial) => (
        <PurchaseTestimonial {...testimonial} />
      ))}
    </div>
  );
};

export default StoreTestimonialList;
