const React = require('react')
const PropTypes = require('prop-types')

const getDimensions = require('../utils/helpers').getDimensions
const getZoomLevel = require('../utils/helpers').getZoomLevel

/**
 * This is the ImageContainer React component that displays the current image
 * and determines the right render size of the current image based on zoom level
 */
class ImageContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      actualSize: {
        width: 0,
        height: 0
      },
      renderSize: {
        width: 0,
        height: 0
      }
    }

    this.updateActualSize = this.updateActualSize.bind(this)
    this.calculateRender = this.calculateRender.bind(this)
  }

  componentWillMount () {
    // save actual size of the current image to state
    this.updateActualSize(this.props.imgUrl)
  }

  componentWillReceiveProps (nextProps) {
    const imageUrlChanged = nextProps.imgUrl !== this.props.imgUrl
    const zoomLevelChanged = nextProps.zoomLevel !== this.props.zoomLevel

    if (imageUrlChanged) {
      this.updateActualSize(nextProps.imgUrl)
    } else if (!imageUrlChanged && zoomLevelChanged) {
      const { width, height } = this.state.actualSize
      this.calculateRender(width, height, window.innerWidth, nextProps.zoomLevel)
    }
  }

  /**
   * Handles updating the actual size of the current image in the state and
   * calls calculateRender
   * @param {imgUrl} imgUrl url of the image
   */
  updateActualSize (imgUrl) {
    let img = new Image()
    img.src = imgUrl

    img.onload = () => {
      this.setState({
        'actualSize': {
          'width': img.width,
          'height': img.height
        }
      }, () => this.calculateRender(img.width, img.height, window.innerWidth))

      img = null
    }
  }

  /**
   * Calculates render size of the current image and updates current zoom level
   * @param {imgWidth} imgWidth actual width of the image
   * @param {imgHeight} imgHeight actual height of the image
   * @param {viewportWidth} viewportWidth current viewport width
   * @param {zoomLevel} zoomLevel current zoom level
   */
  calculateRender (imgWidth, imgHeight, viewportWidth, zoomLevel) {
    const zoomLevelToApply = getZoomLevel(imgWidth, viewportWidth, zoomLevel)
    const dimensions = getDimensions(zoomLevelToApply, imgWidth, imgHeight, this.props.minZoom)
    this.setRenderSize(dimensions)
    this.props.updateZoomLevel(zoomLevelToApply)
  }

  /**
   * Updates the render size of the current image
   * @param takes an object containing width and hight to be updated
   */
  setRenderSize ({ width, height }) {
    this.setState({
      'renderSize': { width, height }
    })
  }

  /**
   * Component render function
   * Renders a div with a background image set to the correct render size
   */
  render () {
    const { width, height } = this.state.renderSize
    const style = {
      'backgroundImage': `url(${this.props.imgUrl})`,
      width,
      height
    }
    return (
      <div className='image-container'>
        <div className='image' style={style} />
      </div>
    )
  }
}

ImageContainer.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  minZoom: PropTypes.number.isRequired,
  zoomLevel: PropTypes.number.isRequired,
  updateZoomLevel: PropTypes.func.isRequired
}

module.exports = ImageContainer
