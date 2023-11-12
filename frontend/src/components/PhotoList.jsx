// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ data, onPhotoClick, favorites, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {data.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        data={photo} 
        onPhotoClick={onPhotoClick} 
        isFavorite={favorites.includes(photo.id)} 
        onFavToggle={() => toggleFavorite(photo.id)} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;
