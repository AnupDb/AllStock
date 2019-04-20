import React, { useState } from "react";
import "./results.scss";
import SearchModal from "./SearchModal";

const Results = ({ images }) => {
  const [showModal, setShowModal] = useState();
  const [largeUrl, setLargeUrl] = useState("");
  const clickHandle = url => {
    setShowModal(true);
    setLargeUrl(url);
  };

  return (
    <div className="flex-images">
      {images.map(image => (
        <div className="results-returned" key={image.previewURL}>
          <img
            onClick={() => {
              clickHandle(image.largeImageURL);
            }}
            src={image.previewURL}
            className="image-result"
            key={image.previewURL}
          />
          <div className="foot-result">
            <strong>...</strong>
          </div>
        </div>
      ))}
      {showModal ? (
        <SearchModal>
          <img src={largeUrl} alt="large" />
        </SearchModal>
      ) : null}
    </div>
  );
};

export default Results;
