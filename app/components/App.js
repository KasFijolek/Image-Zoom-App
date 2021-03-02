import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import HeaderBar from "./HeaderBar";
import ImageContainer from "./ImageContainer";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
`;

/**
 * This is the App React component that displays
 * HeaderBar and ImageContainer components.
 */
function App({ images, minZoom }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);

  /**
   * Handles decreasing the zoom level to be applied to the image
   */
  function handleZoomDecrease() {
    if (zoomLevel > 50) {
      updateZoomLevel(zoomLevel - 5);
    }
  }

  /**
   * Handles increasing the zoom level to be applied to the image
   */
  function handleZoomIncrease() {
    if (zoomLevel < 100) {
      updateZoomLevel(zoomLevel + 5);
    }
  }

  /**
   * Updates the currentImgIndex state that indicates which image should be
   * loaded into ImageContainer
   * @param {e} e event from ImageSelect component with new img index
   */
  function handleSelectChange(e) {
    setCurrentImgIndex(Number(e.target.value));
  }

  /**
   * Updates the current zoomLevel that should be applied to the image
   * @param {zoomLevel} zoomLevel new zoomLevel value to be applied
   */
  function updateZoomLevel(zoomLevel) {
    const zoomLevelIsAMultipleOfFive = zoomLevel % 5 === 0;
    if (zoomLevelIsAMultipleOfFive) {
      setZoomLevel(zoomLevel);
    }
  }

  /**
   * Component render function
   * Renders HeaderBar and ImageContainer components
   */
  return (
    <Container>
      <HeaderBar
        images={images}
        handleSelectChange={handleSelectChange}
        zoomLevel={zoomLevel}
        handleZoomDecrease={handleZoomDecrease}
        handleZoomIncrease={handleZoomIncrease}
        currentImgIndex={currentImgIndex}
      />
      <ImageContainer
        imgUrl={images[currentImgIndex].url}
        minZoom={minZoom}
        updateZoomLevel={updateZoomLevel}
        zoomLevel={zoomLevel}
      />
    </Container>
  );
}

/**
 * Default props to be applied if not passed through props
 */
App.defaultProps = {
  minZoom: 50,
  maxZoom: 100,
};

App.propTypes = {
  images: PropTypes.array.isRequired,
};

export default App;
