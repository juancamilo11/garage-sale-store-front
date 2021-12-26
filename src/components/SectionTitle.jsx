import React from "react";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className="section-title__main-container">
      <h2 className="section-title__title">
        {sectionTitle || "Sección sin título"}
      </h2>
      <div className="section-title__decorator"></div>
    </div>
  );
};

export default SectionTitle;
