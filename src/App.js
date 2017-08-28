import React, { Component } from 'react'
import { cyan500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import IndexNavTodo from './components/IndexNavTodo/index'

import './App.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <IndexNavTodo/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
