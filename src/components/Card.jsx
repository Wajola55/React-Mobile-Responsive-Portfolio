import React from 'react';
import '../styles.css';

const Card = ({ django, title, detail }) => {
  return (
    <div className="card">
      <img src={django} alt="card" />
      <span className="title">{title}</span>
      <span className="detail">{detail}</span> 
    </div>
  );
};

export default Card;
