import React from 'react';

const ClickableImage = ({ className, targetPage, imageSource, altText }) => {
  return (
    <a href={targetPage}>
      <img src={imageSource} alt={altText} className={className}/>
    </a>
  );
}

export default ClickableImage;