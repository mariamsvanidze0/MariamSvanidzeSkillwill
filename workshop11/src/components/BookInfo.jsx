import React from 'react';

const BookInfo = ({ description, year, awards }) => {
  return (
    <div>
      <p>{description}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Awards:</strong> {awards}</p>
    </div>
  );
}

export default BookInfo;
