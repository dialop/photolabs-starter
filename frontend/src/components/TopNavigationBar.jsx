import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import topics from '../mocks/topics';

const TopNavigationBar = ({
  isFavPhotoExist,
  fetchPhotosByTopic
}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics} 
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  );
};

export default TopNavigationBar;