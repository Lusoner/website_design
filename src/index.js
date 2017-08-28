import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'
import Router from './Route'
import registerServiceWorker from './registerServiceWorker'

injectTapEventPlugin()

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
