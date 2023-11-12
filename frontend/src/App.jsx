import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';
import photos from './mocks/photos'; 

const App = () => {
  // Use the custom hook to get state and function handlers
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={state.favorites.length > 0} />
      <PhotoList 
        data={photos} 
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
