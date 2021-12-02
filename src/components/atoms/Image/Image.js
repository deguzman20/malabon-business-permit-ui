import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({ src, width, height }) => {
  return (
    <img 
      src={src}
      width={width}
      height={height} 
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
