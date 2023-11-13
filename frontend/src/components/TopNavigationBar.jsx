import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import topics from '../mocks/topics';

const TopNavigationBar = ({
  isFavPhotoExist,
  fetchPhotosByTopic
}) => {

  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={reloadPage}>PhotoLabs</span>
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