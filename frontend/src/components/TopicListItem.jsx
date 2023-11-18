// ---- TopicListItem Component ---- //

import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ data, onTopicClick }) => {
  const selectCateg = () => {
    onTopicClick(data.id);
  }

  return (
    <div className="topic-list__item">
      <span onClick={selectCateg} style={{ cursor: 'pointer' }}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
