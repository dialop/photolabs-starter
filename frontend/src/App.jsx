// ---- Main App Component---- //

import React from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute'; 
import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal, 
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        state={state}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoDetailsModal 
        state={state}
        isOpen={state.isModalOpen} 
        onClose={onClosePhotoDetailsModal} 
        data={state.selectedPhotoData} 
        toggleFavorite={updateToFavPhotoIds} 
        isFavorite={state.selectedPhotoData ? state.favorites.includes(state.selectedPhotoData.id) : false}
        favorites={state.favorites}
        onPhotoClick={onPhotoSelect}
      />
    </div>
  );
};

export default App;
