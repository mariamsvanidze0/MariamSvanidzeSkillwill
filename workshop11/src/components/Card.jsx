import React from 'react';
import '../Card.css';
import BookInfo from './BookInfo';
import ToggleButton from './ToggleButton';

const Card = ({ author, name, image, description, year, awards }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{author}</h1>
      <h3>{name} by {author}</h3>
      <ToggleButton targetId={name} />
      <div id={name} className="book-info" style={{display: 'none'}}>
        <BookInfo description={description} year={year} awards={awards} />
      </div>
    </div>
  );
};

export default Card;
