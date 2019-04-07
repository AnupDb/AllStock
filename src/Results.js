import React from "react";
import "./results.scss";
const Results = ({ images }) => {
  return (
    <div className="flex-images">
    {images.map(image => (

      <div className="results-returned">
        <img src={image.previewURL} key={image.previewURL} className="image-result"/>
        <div className="foot-result">
          <strong>...</strong>
        </div>
      </div>

    ))}
    </div>
  );
};

export default Results;
