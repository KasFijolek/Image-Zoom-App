import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useImageSize } from "../hooks/useImageSize";
import { getDimensions, getZoomLevel } from "../utils/helpers";

const ImageContainerElement = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ImageElement = styled.div`
  margin: auto;
  background-size: 100%;
  background-repeat: no-repeat;
`;

/**
 * This is the ImageContainer React component that displays the current image
 * and determines the right render size of the current image based on zoom level
 */
function ImageContainer({ imgUrl, zoomLevel, minZoom, updateZoomLevel }) {
  const actualSize = useImageSize(imgUrl, updateZoomLevel);

  function calculateRender() {
    const dimensions = getDimensions(
      zoomLevel,
      actualSize.width,
      actualSize.height,
      minZoom
    );
    return dimensions;
  }

  const { width, height } = calculateRender();

  return (
    <ImageContainerElement>
      <ImageElement
        className="image"
        style={{ backgroundImage: `url(${imgUrl})`, width, height }}
      />
    </ImageContainerElement>
  );
}

ImageContainer.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  minZoom: PropTypes.number.isRequired,
  zoomLevel: PropTypes.number.isRequired,
  updateZoomLevel: PropTypes.func.isRequired,
};

export default ImageContainer;
