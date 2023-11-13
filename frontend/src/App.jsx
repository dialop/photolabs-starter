import React, { useState, useEffect } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const [photos, setPhotos] = useState([]); // Add this line to hold the fetched photos
  // Use the custom hook to get state and function handlers
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  useEffect(() => {
    // Fetch photos from your API
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data)) // Set the photos in state
      .catch((error) => console.error('Error:', error));
  }, []); // The empty array ensures this effect only runs once

  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={state.favorites.length > 0} />
      <PhotoList 
        data={photos} // Replace the hardcoded data with the fetched photos
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
