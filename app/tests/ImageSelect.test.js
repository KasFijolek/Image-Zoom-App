const React = require('react')
const ReactDOM = require ('react-dom')
const { shallow } = require('enzyme')
const ImageSelect = require('../components/ImageSelect')

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

describe('rendering ImageSelect', () => {
  it('should render ImageSelect without crashing', () => {
    const currentImgIndex = 1
    const mockHandleSelectChange = jest.fn()

    const div = document.createElement('div')
    ReactDOM.render(<ImageSelect
                      images={testImages}
                      currentImgIndex={currentImgIndex}
                      handleSelectChange={mockHandleSelectChange} />, div)
  })

  it('should render ImageSelect with correct information', () => {
    const currentImgIndex = 1
    const mockHandleSelectChange = jest.fn()

    const imageSelect = shallow(<ImageSelect
                                images={testImages}
                                currentImgIndex={currentImgIndex}
                                handleSelectChange={mockHandleSelectChange} />)

    expect(imageSelect.instance().props.images).toEqual(testImages)
    expect(imageSelect.instance().props.currentImgIndex).toEqual(currentImgIndex)
  })
})
