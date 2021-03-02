import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageSelectContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #d3dce6;
  background: white;
`;

const ImageSelectElement = styled.select`
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 5px;
  width: 268px;
  height: 34px;
  line-height: 1;
  font-size: 16px;
`;

/**
 * This is the ImageSelect React component that displays
 * the select box that lets you change the image to be displayed
 */
function ImageSelect({ currentImgIndex, handleSelectChange, images }) {
  return (
    <ImageSelectContainer>
      <ImageSelectElement value={currentImgIndex} onChange={handleSelectChange}>
        {images.map((currentElement, index) => {
          return (
            <option key={index} value={index}>
              {currentElement.name}
            </option>
          );
        })}
      </ImageSelectElement>
    </ImageSelectContainer>
  );
}

ImageSelect.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  currentImgIndex: PropTypes.number.isRequired,
};

export default ImageSelect;
