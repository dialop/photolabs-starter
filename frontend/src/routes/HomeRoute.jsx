// ---- Homepage Route ---- //

import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ state, onPhotoSelect, updateToFavPhotoIds, fetchPhotosByTopic }) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
        isFavPhotoExist={state.favorites.length > 0} 
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList 
        data={state.photoData} 
        onPhotoClick={onPhotoSelect} 
        favorites={state.favorites} 
        toggleFavorite={updateToFavPhotoIds} 
      />
    </div>
  );
};

export default HomeRoute;
