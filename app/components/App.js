const React = require('react')
const PropTypes = require('prop-types')

const HeaderBar = require('./HeaderBar')
const ImageContainer = require('./ImageContainer')

/**
 * This is the App React component that displays
 * HeaderBar and ImageContainer components.
 */
class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImgIndex: 0,
      zoomLevel: 100
    }

    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.updateZoomLevel = this.updateZoomLevel.bind(this)
    this.handleZoomDecrease = this.handleZoomDecrease.bind(this)
    this.handleZoomIncrease = this.handleZoomIncrease.bind(this)
  }

  /**
   * Handles decreasing the zoom level to be applied to the image
   */
  handleZoomDecrease () {
    if (this.state.zoomLevel > 50) {
      this.updateZoomLevel(this.state.zoomLevel - 5)
    }
  }

  /**
   * Handles increasing the zoom level to be applied to the image
   */
  handleZoomIncrease () {
    if (this.state.zoomLevel < 100) {
      this.updateZoomLevel(this.state.zoomLevel + 5)
    }
  }

  /**
   * Updates the currentImgIndex state that indicates which image should be
   * loaded into ImageContainer
   * @param {e} e event from ImageSelect component with new img index
   */
  handleSelectChange (e) {
    this.setState({
      currentImgIndex: Number(e.target.value)
    })
  }

  /**
   * Updates the current zoomLevel that should be applied to the image
   * @param {zoomLevel} zoomLevel new zoomLevel value to be applied
   */
  updateZoomLevel (zoomLevel) {
    const zoomLevelIsAMultipleOfFive = zoomLevel % 5 === 0
    if (zoomLevelIsAMultipleOfFive) {
      this.setState({ zoomLevel })
    }
  }

  /**
   * Component render function
   * Renders HeaderBar and ImageContainer components
   */
  render () {
    return (
      <div className='container'>
        <HeaderBar
          images={this.props.images}
          handleSelectChange={this.handleSelectChange}
          zoomLevel={this.state.zoomLevel}
          handleZoomDecrease={this.handleZoomDecrease}
          handleZoomIncrease={this.handleZoomIncrease}
          currentImgIndex={this.state.currentImgIndex} />
        <ImageContainer
          imgUrl={this.props.images[this.state.currentImgIndex].url}
          minZoom={this.props.minZoom}
          updateZoomLevel={this.updateZoomLevel}
          zoomLevel={this.state.zoomLevel} />
      </div>
    )
  }
}

/**
 * Default props to be applied if not passed through props
 */
App.defaultProps = {
  minZoom: 50,
  maxZoom: 100
}

App.propTypes = {
  images: PropTypes.array.isRequired
}

module.exports = App
