import React, { useState, useEffect } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  // Use the custom hook to get state, function handlers, and fetchPhotosByTopic
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic 
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar 
        isFavPhotoExist={state.favorites.length > 0} 
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      <PhotoList 
        data={state.photoData} // Use state.photoData from useApplicationData
        onPhotoClick={onPhotoSelect} 
        favorites={state.favorites} 
        toggleFavorite={updateToFavPhotoIds} 
      />
      <PhotoDetailsModal 
        isOpen={state.isModalOpen} 
        onClose={onClosePhotoDetailsModal} 
        data={state.selectedPhotoData} 
        toggleFavorite={updateToFavPhotoIds} 
        isFavorite={state.selectedPhotoData ? state.favorites.includes(state.selectedPhotoData.id) : false}
        favorites={state.favorites}
      />
    </div>
  );
};

export default App;
