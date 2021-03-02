import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ImageSelect from "./ImageSelect";
import ZoomControls from "./ZoomControls";

const HeaderBarElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #e0e6ed;
`;

/**
 * This is the HeaderBar React component that displays
 * ImageSelect and ZoomControls components.
 */
export default function HeaderBar(props) {
  return (
    <HeaderBarElement>
      <ImageSelect
        images={props.images}
        currentImgIndex={props.currentImgIndex}
        handleSelectChange={props.handleSelectChange}
      />
      <ZoomControls
        zoomLevel={props.zoomLevel}
        handleZoomDecrease={props.handleZoomDecrease}
        handleZoomIncrease={props.handleZoomIncrease}
      />
    </HeaderBarElement>
  );
}

HeaderBar.propTypes = {
  images: PropTypes.array.isRequired,
  zoomLevel: PropTypes.number.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleZoomDecrease: PropTypes.func.isRequired,
  handleZoomIncrease: PropTypes.func.isRequired,
};
