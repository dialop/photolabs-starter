// ---- PhotoFavButton Component ---- //

import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onFavToggle, isSelected }) {
  const switchState = () => {
    onFavToggle();
  };

  return (
    <div className="photo-list__fav-icon" onClick={switchState}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
          selected={isSelected}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
