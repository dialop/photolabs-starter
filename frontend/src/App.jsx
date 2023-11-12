import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';


const App = () => (
  <div className="App">
    <TopNavigationBar topics={topics} />
    <PhotoList data={photos} />
  </div>
);

export default App;
