const React = require('react')
const { shallow, mount } = require('enzyme')
const App = require('../components/App')

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

describe('rendering app', () => {
  it('should render App without crashing', () => {
    const div = document.createElement('div')
    mount(<App images={testImages} />, div)
  })

  it('should render App with correct information', () => {
    const app = shallow(<App images={testImages} />)
    expect(app.instance().props.images).toEqual(testImages)
  })

  // it('should throw an error if no images passed to app', () => {
  //   expect(shallow(<App />)).toThrow()
  // })
})
