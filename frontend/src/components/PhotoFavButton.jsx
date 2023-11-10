import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const buttonClass = isLiked ? 'photo-list__fav-icon active' : 'photo-list__fav-icon';

  return (
    <button className={buttonClass} onClick={handleLikeClick}>
      <i className={`${isLiked ? "fas fa-heart" : "far fa-heart"}`}></i>
    </button>
  );
}

export default PhotoFavButton;
