import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ZoomLevel = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;
  min-width: 42px;
  text-align: center;
  font-family: sans-serif;
  color: #3c4858;
`;

const ZoomControlsButton = styled.button`
  vertical-align: middle;
  border-radius: 50%;
  border: 0;
  width: 22px;
  height: 22px;
  background: #8492a6;
  font-size: 14px;
  font-weight: 700;
  color: #e0e6ed;
  cursor: pointer;
  transition: background 0.2s;
  &:hover,
  &:focus {
    outline: none;
    background: red;
  }
`;

/**
 * This is the ZoomControls React component that displays
 * the current zoom level and buttons that handle changing the zoom level
 */
function ZoomControls({ handleZoomDecrease, handleZoomIncrease, zoomLevel }) {
  return (
    <div className="zoom-controls">
      <ZoomControlsButton onClick={handleZoomDecrease}>-</ZoomControlsButton>
      <ZoomLevel>{zoomLevel}%</ZoomLevel>
      <ZoomControlsButton onClick={handleZoomIncrease}>+</ZoomControlsButton>
    </div>
  );
}

ZoomControls.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
  handleZoomDecrease: PropTypes.func.isRequired,
  handleZoomIncrease: PropTypes.func.isRequired,
};

export default ZoomControls;
