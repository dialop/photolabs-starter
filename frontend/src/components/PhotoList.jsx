// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ data, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {data.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} onPhotoClick={onPhotoClick} />
      ))}
    </ul>
  );
};

export default PhotoList;
