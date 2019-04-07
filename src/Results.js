import React from "react";
import "./results.scss";
const Results = ({ images }) => {
  return (
    <div class="flex-images">
      {images.map(image => (
        <img src={image.previewURL} key={image.previewURL} />
      ))}
    </div>
  );
};

export default Results;
