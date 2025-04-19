import React from "react";

const FeatureItem = ({ imageSource, imageAlt, title, paragraph }) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={imageSource} alt={imageAlt} />
      <h2 className="sr-only">Features</h2>
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default FeatureItem;
