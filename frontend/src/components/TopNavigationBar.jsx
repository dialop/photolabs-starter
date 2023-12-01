// ---- TopNavigationBar Component ---- //

import React, { useState, useEffect } from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import axios from 'axios';

const TopNavigationBar = ({
  isFavPhotoExist,
  fetchPhotosByTopic
}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/topics")
      .then((response) => {
        setTopics(response.data);
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

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
