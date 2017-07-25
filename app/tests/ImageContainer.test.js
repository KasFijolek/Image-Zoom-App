const React = require('react')
const ReactDOM = require ('react-dom')
const { shallow } = require('enzyme')
const ImageContainer = require('../components/ImageContainer')

describe('rendering ImageContainer', () => {
  it('should render ImageContainer without crashing', () => {
    const imgUrl = 'testImgUrl'
    const minZoom = 50
    const zoomLevel = 75
    const mockUpdateZoomLevel = jest.fn()

    const div = document.createElement('div')
    ReactDOM.render(<ImageContainer
                      imgUrl={imgUrl}
                      minZoom={minZoom}
                      updateZoomLevel={mockUpdateZoomLevel}
                      zoomLevel={zoomLevel} />, div)
  })

  it('should render ImageContainer with correct information', () => {
    const imgUrl = 'testImgUrl'
    const minZoom = 50
    const zoomLevel = 75
    const mockUpdateZoomLevel = jest.fn()

    const imageContainer = shallow(<ImageContainer
                                  imgUrl={imgUrl}
                                  minZoom={minZoom}
                                  updateZoomLevel={mockUpdateZoomLevel}
                                  zoomLevel={zoomLevel} />)

    expect(imageContainer.instance().props.imgUrl).toEqual(imgUrl)
    expect(imageContainer.instance().props.minZoom).toEqual(minZoom)
    expect(imageContainer.instance().props.zoomLevel).toEqual(zoomLevel)
  })
})

describe('changing render size', () => {
  it('set render size in state', () => {
    const renderSize = { width: 100, height: 100}
    const imgUrl = 'testImgUrl'
    const minZoom = 50
    const zoomLevel = 75
    const mockUpdateZoomLevel = jest.fn()
    const imageContainer = shallow(<ImageContainer
                                  imgUrl={imgUrl}
                                  minZoom={minZoom}
                                  updateZoomLevel={mockUpdateZoomLevel}
                                  zoomLevel={zoomLevel} />)

    imageContainer.instance().setRenderSize(renderSize)
    expect(imageContainer.state('renderSize')).toEqual(renderSize)
  })
})
