import React from 'react';

const ClickableImage = ({ targetPage, imageSource, altText }) => {
  return (
    <a href={targetPage}>
      <img src={imageSource} alt={altText} />
    </a>
  );
}

export default ClickableImage;