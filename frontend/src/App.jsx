// App.jsx
import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhotoData, setSelectedPhotoData] = useState(null); // Add state for selected photo data

  const openModal = (photoData) => {
    setSelectedPhotoData(photoData); // Set the selected photo data
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhotoData(null); // Reset selected photo data
    setModalOpen(false);
  };

  return (
    <div className="App">
      <TopNavigationBar topics={topics} />
      <PhotoList data={photos} onPhotoClick={openModal} />
      <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} data={selectedPhotoData} />
    </div>
  );
}

export default App;
