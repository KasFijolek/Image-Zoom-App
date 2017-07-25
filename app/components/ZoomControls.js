const React = require('react')
const PropTypes = require('prop-types')

/**
 * This is the ZoomControls React component that displays
 * the current zoom level and buttons that handle changing the zoom level
 */
function ZoomControls (props) {
  return (
    <div className='zoom-controls'>
      <button className='zoom-control-btn' onClick={props.handleZoomDecrease}>-</button>
      <span className='zoom-level'>{props.zoomLevel}%</span>
      <button className='zoom-control-btn' onClick={props.handleZoomIncrease}>+</button>
    </div>
  )
}

ZoomControls.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
  handleZoomDecrease: PropTypes.func.isRequired,
  handleZoomIncrease: PropTypes.func.isRequired
}

module.exports = ZoomControls
