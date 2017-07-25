const React = require('react')
const PropTypes = require('prop-types')

const ImageSelect = require('./ImageSelect')
const ZoomControls = require('./ZoomControls')

/**
 * This is the HeaderBar React component that displays
 * ImageSelect and ZoomControls components.
 */
function HeaderBar (props) {
  return (
    <div className='header-bar'>
      <ImageSelect
        images={props.images}
        currentImgIndex={props.currentImgIndex}
        handleSelectChange={props.handleSelectChange} />
      <ZoomControls
        zoomLevel={props.zoomLevel}
        handleZoomDecrease={props.handleZoomDecrease}
        handleZoomIncrease={props.handleZoomIncrease} />
    </div>
  )
}

HeaderBar.propTypes = {
  images: PropTypes.array.isRequired,
  zoomLevel: PropTypes.number.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleZoomDecrease: PropTypes.func.isRequired,
  handleZoomIncrease: PropTypes.func.isRequired
}

module.exports = HeaderBar
