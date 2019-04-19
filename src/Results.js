import React from "react";
import "./results.scss";
const Results = ({ images }) => {
  return (
    <div className="flex-images">
      {images.map(image => (
        <div className="results-returned" key={image.previewURL}>
          <img
            src={image.previewURL}
            className="image-result"
            key={image.previewURL}
          />
          <div className="foot-result">
            <strong>...</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
