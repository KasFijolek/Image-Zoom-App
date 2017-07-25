const React = require('react')
const ReactDOM = require ('react-dom')
const { shallow } = require('enzyme')
const HeaderBar = require('../components/HeaderBar')

const testImages = [
  {
    url: '../app/images/Onboarding-invite.png',
    name: 'iPhone Image'
  },
  {
    url: '../app/images/Onboarding-location.png',
    name: 'iPad Image'
  },
  {
    url: '../app/images/Main-page.png',
    name: 'Desktop Image'
  }]

describe('rendering HeaderBar', () => {
  it('should render HeaderBar without crashing', () => {
    const zoomLevel = 75
    const currentImgIndex = 1
    const mockHandleSelectChange = jest.fn()
    const mockHandleZoomDecrease = jest.fn()
    const mockHandleZoomIncrease = jest.fn()

    const div = document.createElement('div')
    ReactDOM.render(<HeaderBar
                      images={testImages}
                      handleSelectChange={mockHandleSelectChange}
                      zoomLevel={zoomLevel}
                      handleZoomDecrease={mockHandleZoomDecrease}
                      handleZoomIncrease={mockHandleZoomIncrease}
                      currentImgIndex={currentImgIndex} />, div)
  })

  it('should render HeaderBar with correct information', () => {
    const zoomLevel = 75
    const currentImgIndex = 1
    const mockHandleSelectChange = jest.fn()
    const mockHandleZoomDecrease = jest.fn()
    const mockHandleZoomIncrease = jest.fn()

    const headerBar = shallow(<HeaderBar
                          images={testImages}
                          handleSelectChange={mockHandleSelectChange}
                          zoomLevel={zoomLevel}
                          handleZoomDecrease={mockHandleZoomDecrease}
                          handleZoomIncrease={mockHandleZoomIncrease}
                          currentImgIndex={currentImgIndex} />)

    expect(headerBar.instance().props.images).toEqual(testImages)
    expect(headerBar.instance().props.zoomLevel).toEqual(zoomLevel)
    expect(headerBar.instance().props.currentImgIndex).toEqual(currentImgIndex)
  })
})
