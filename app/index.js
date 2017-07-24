const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/App')

require('./index.scss')

ReactDOM.render(
  <App
    images={[
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
      }]} />,
  document.getElementById('app')
)
