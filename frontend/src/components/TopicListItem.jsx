// ---- TopicListItem Component ---- //

import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ data, onTopicClick }) => {
  const selectCategory = () => {
    onTopicClick(data.id);
  }

  return (
    <div className="topic-list__item">
      <span onClick={selectCategory}> {data.title}</span>
    </div>
  );
};

export default TopicListItem;
