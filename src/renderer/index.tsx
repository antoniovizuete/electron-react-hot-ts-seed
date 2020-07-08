import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const root = document.getElementById('app')
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // tslint:disable-next-line:no-require-imports
    const HotApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <HotApp />
      </AppContainer>,
      root
    )
  })
}
