import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  // Check if data.similar_photos is an array, otherwise, provide an empty array as a fallback
  //const similarPhotos = Array.isArray(data.similar_photos) ? data.similar_photos : [];

  const similarPhotos = data.similar_photos;

  console.log(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__selected-photo">
          <img className="photo-details-modal__image" src={data.urls.full} alt="Selected" />
        </div>
        <div className="photo-details-modal__container">
          <div className="photo-details-modal__top-bar">
            <h2 className="photo-details-modal__header">Photo Details</h2>
            <div className="photo-details-modal__photo-fav-button">
              <PhotoFavButton /> {/* Include the PhotoFavButton component */}
            </div>
          </div>
          <hr className="photo-details-modal__line" />
          <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={data.user.profile} alt="Photographer" />
          <p className="photo-details-modal__photographer-name">{data.user.name} </p>
          <p className="photo-details-modal__photographer-location">{`${data.location.city}, ${data.location.country}`}</p>
        </div>
        </div>
        <div className="photo-details-modal__similar-photos">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
           <div className="photo-details-modal__images">
           {Object.keys(similarPhotos).map((photo) => (
          <PhotoListItem key={photo.id} data={similarPhotos[photo]}/>
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//<img className="photo-list__user-profile" src={data.user.profile} alt={`Profile of ${data.user.name}`} />

export default PhotoDetailsModal;


