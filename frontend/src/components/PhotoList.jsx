import React from 'react';
import PhotoListItem from './PhotoListItem'; 
import '../styles/PhotoList.scss';


const PhotoList = ({ data }) => {
  return (
    <ul className="photo-list">
      {data.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} />
      ))}
    </ul>
  );
};
export default PhotoList;