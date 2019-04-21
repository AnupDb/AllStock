import React, { useState } from "react";
import "./results.scss";
import SearchModal from "./SearchModal";
import downarrow from "./assets/downarrow.png";
import CreateAlbum from "./assets/CreateAlbumIcon.png";

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
          <div className="origlargeimage">
            <div className="topbar">
              <button className="portalclosebutton">x</button>
            </div>
            <img src={largeUrl} alt="large" />
          </div>
          <div className="OrigLargeImageAddAlbum">
           <div className="OrigLargeImageAddAlbumLeft">
             <div className="AlbumDropList">
               <div className="DropListNav">
                 <div className="defaultlistvalue">Sophie</div>
                 <div className="openlisticon"><img src={downarrow} alt="openlist" /></div>
               </div>
               <div className="DropListItems">
                 <div><img src={CreateAlbum}/><button>Create new album</button></div>
                 <div><img src={downarrow}/><button>Flip once</button></div>
                 <div><img src={downarrow}/><button>Flip once</button></div>
                 <div><img src={downarrow}/><button>Flip once</button></div>
                 <div><img src={downarrow}/><button>Flip once</button></div>
                 <div><img src={downarrow}/><button>Flip once</button></div>
               </div>
             </div>
           </div>
           <div className="OrigLargeImageAddAlbumMid">
             <button>Save</button>
           </div>
           <div className="OrigLargeImageAddAlbumRight">
             <div className="AddButton">+</div>
           </div>
          </div>
          <div className="blackscreen"></div>
        </SearchModal>
      ) : null}

    </div>
  );
};

export default Results;
