// ---- TopicList Component ---- //

import React from 'react';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  return (
    <div className="topic-list">
      {topics.map(topic => (
        <TopicListItem 
          key={topic.id} 
          data={topic} 
          onTopicClick={fetchPhotosByTopic} 
        />
      ))}
    </div>
  );
};

export default TopicList;
