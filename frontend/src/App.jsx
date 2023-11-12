import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

const sampleTopics = ['Nature', 'Cities', 'People', 'Animals'];

const App = () => (
  <div className="App">
    <TopicList topics={sampleTopics} />
    <TopNavigationBar/>
    <PhotoList data={PhotoList.sampleDataForPhotoListItem} />
  </div>
);

export default App;
