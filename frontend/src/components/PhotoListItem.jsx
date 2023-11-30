import React from 'react';
import PhotoFavButton from './PhotoFavButton'; 
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { data, onPhotoClick, isFavorite, onFavToggle } = props;

  const handleClick = () => {
    onPhotoClick(data);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        onFavToggle={onFavToggle} 
        isSelected={isFavorite} 
      />
      <img 
        className="photo-list__image" 
        src={data.urls.regular} 
        alt={`Photo by ${data.user.name}`} 
        onClick={handleClick}
      />
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile" 
          src={data.user.profile} 
          alt={`Profile of ${data.user.name}`} 
        />
        <p className="photo-list__user-info">{data.user.name}</p>
        <p className="photo-list__user-location">{`${data.location.city}, ${data.location.country}`}</p>
      </div>
    </div>
  );
}

export default PhotoListItem;
