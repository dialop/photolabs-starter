import React from 'react';
import PhotoFavButton from './PhotoFavButton'; 
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ data }) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__fav-button-container">
        <PhotoFavButton />
      </div>
      <img src={data.imageSource} alt="Photograph" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={data.userProfileImage} alt={`${data.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h2>{data.username}</h2>
          <p className="photo-list__user-location">{data.location.city}, {data.location.country}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
