// CardComponent.jsx

import React from 'react';
import './Card.css';

const Card = ({ title, content, name, position }) => {
  return (
    <div className="card">
      <p>
        <span>{title}</span>
      </p>
      <p>{content}</p>
      <p>
        <span>{name}</span>
      </p>
      <p>{position}</p>
    </div>
  );
};

export default Card;
