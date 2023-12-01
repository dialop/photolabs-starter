// ---- Modal Display Photo Details  ---- //

import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ 
  state,
  isOpen, 
  onClose, 
  data, 
  toggleFavorite, 
  isFavorite, 
  favorites,
  onPhotoClick,
 }) => {
  if (!isOpen) return null;

  const handleFavoriteToggle = () => {
    toggleFavorite(data.id);
  };

  const handleClose = () => {
    onClose();
  };

  const findDataIndex = () => {
    for(let i = 0; i < state.photoData.length; i++){
    if(state.photoData[i].id === data.id){
      return state.photoData[i].similar_photos;
    }
  }
  };
const similarPhotos = findDataIndex() || [];

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
            <div className="photo-details-modal__photo-fav-button">
              <PhotoFavButton onFavToggle={handleFavoriteToggle} isSelected={isFavorite} />
            </div>
          </div>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={data.user.profile} alt="Photographer" />
            <div className="photo-details-modal__photographer-info">
              <p className="photo-details-modal__photographer-name">{data.user.name}</p>
              <p className="photo-details-modal__photographer-location">{`${data.location.city}, ${data.location.country}`}</p>
            </div>
          </div>
          <div className="photo-details-modal__similar-photos">
            <h2 className="photo-details-modal__header">Similar Photos</h2>
            <hr className="photo-details-modal__line" />
            <div className="photo-details-modal__images">
              {similarPhotos.map((photo) => (
                <PhotoListItem
                  key={photo.id}
                  data={photo}
                  onPhotoClick={onPhotoClick}
                  onFavToggle={() => toggleFavorite(photo.id)}
                  isFavorite={favorites.includes(photo.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;