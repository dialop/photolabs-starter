import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ data }) => {
  const selectCateg = () => {
  }

  return (
    <div className="topic-list__item">
      <span onClick={selectCateg} style={{ cursor: 'pointer' }}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;