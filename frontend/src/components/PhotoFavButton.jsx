import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [selected, setFav] = useState(false);

  const switchState = () => {
    setFav(selected === true ? false : true);
    console.log(selected);
  };

  return (
    <div className="photo-list__fav-icon" onClick={switchState}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;