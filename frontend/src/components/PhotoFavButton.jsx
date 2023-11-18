// ---- PhotoFavButton Component ---- //

import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onFavToggle, isSelected }) {
  const [selected, setFav] = useState(isSelected);

  const switchState = () => {
    setFav(!selected);
    onFavToggle();
  };

  return (
    <div className="photo-list__fav-icon" onClick={switchState}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
        selected={selected}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
