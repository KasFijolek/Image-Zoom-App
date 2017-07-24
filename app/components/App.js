const React = require('react')
const PropTypes = require('prop-types')

const HeaderBar = require('./HeaderBar')
const ImageContainer = require('./ImageContainer')

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

  handleZoomDecrease () {
    if (this.state.zoomLevel > 50) {
      this.updateZoomLevel(this.state.zoomLevel - 5)
    }
  }

  handleZoomIncrease () {
    if (this.state.zoomLevel < 100) {
      this.updateZoomLevel(this.state.zoomLevel + 5)
    }
  }

  handleSelectChange (e) {
    this.setState({
      currentImgIndex: Number(e.target.value)
    })
  }

  updateZoomLevel (zoomLevel) {
    const zoomLevelIsAMultipleOfFive = zoomLevel % 5 === 0
    if (zoomLevelIsAMultipleOfFive) {
      this.setState({ zoomLevel })
    }
  }

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

App.defaultProps = {
  minZoom: 50,
  maxZoom: 100
}

App.propTypes = {
  images: PropTypes.array.isRequired
}

module.exports = App
