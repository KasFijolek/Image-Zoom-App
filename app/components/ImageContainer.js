const React = require('react')
const PropTypes = require('prop-types')

const getProportionalDimensions = require('../utils/helpers').getProportionalDimensions

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
    this.calculateRenderSize = this.calculateRenderSize.bind(this)
  }

  componentWillMount () {
    this.updateActualSize(this.props.imgUrl)
  }

  componentWillReceiveProps (nextProps) {
    const imageUrlChanged = nextProps.imgUrl !== this.props.imgUrl

    if (imageUrlChanged) {
      this.updateActualSize(nextProps.imgUrl)
    } else if (!imageUrlChanged && nextProps.zoomLevel !== this.props.zoomLevel) {
      const { width, height } = this.state.actualSize
      this.calculateRenderSize(width, height, window.innerWidth, nextProps.zoomLevel)
    }
  }

  updateActualSize (imgUrl) {
    let img = new Image()
    img.src = imgUrl
    img.onload = () => {
      this.setState({
        'actualSize': {
          'width': img.width,
          'height': img.height
        }
      }, () => this.calculateRenderSize(img.width, img.height, window.innerWidth))
      img = null
    }
  }

  calculateRenderSize (imgWidth, imgHeight, viewportWidth, zoomLevel) {
    const elementFitsInViewport = imgWidth < viewportWidth

    if (zoomLevel) {
      const proportionalDimensions = getProportionalDimensions(zoomLevel, imgWidth, imgHeight, this.props.minZoom)
      this.setRenderSize(proportionalDimensions)
    } else {
      let zoomLevelToFit = 100

      if (elementFitsInViewport) {
        this.setRenderSize({ width: imgWidth, height: imgHeight })
      } else {
        const zoomCalculation = (viewportWidth * 100) / imgWidth
        const proportionalDimensions = getProportionalDimensions(zoomCalculation, imgWidth, imgHeight, this.props.minZoom)
        zoomLevelToFit = proportionalDimensions.zoomLevel
        this.setRenderSize(proportionalDimensions)
      }

      this.props.updateZoomLevel(zoomLevelToFit)
    }
  }

  setRenderSize ({ width, height }) {
    this.setState({
      'renderSize': { width, height }
    })
  }

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
