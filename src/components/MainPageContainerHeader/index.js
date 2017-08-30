import React, { Component } from 'react'

import './style/index.css'

export default class MainPageContainerHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowHeight: 0,
    }
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }
  render() {
    return (
      <header className="container-header" style={{height: this.state.windowHeight}}>
        <div className="container-header-visual">

        </div>
        <div className="container-header-title">

        </div>
        <div className="scroll js-btn-scroll">
        </div>
      </header>
    )
  }
}