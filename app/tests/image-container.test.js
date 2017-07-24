import React from 'react'
import { shallow } from 'enzyme'
import ImageContainer from '../components/ImageContainer'
import App from '../components/App'

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

describe('updating image size', () => {
  it('should retain zoomLevel of 100 if image fits in viewport', () => {
    const app = shallow(<App images={testImages} />)
    const imageContainer = shallow(<ImageContainer
      imgUrl='../app/images/Onboarding-invite.png'
      minZoom={50}
      zoomLevel={100}
      updateZoomLevel={app.instance().updateZoomLevel} />)
    imageContainer.instance().calculateRenderSize()
    expect(imageContainer.state('zoomLevel')).toEqual(100)
  })
})