import React, { Component } from 'react'


import './IndexBtnMenu.css'

export default class IndexBtnMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClass: 'index-btn-menu',
    }
    this.handleMouseEnter.bind(this)
    this.handleMouseLeave.bind(this)
  }
  render() {
    const { handleMouseEnter, handleMouseLeave } = this
    return (
      <div
        className={this.state.menuClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="index-btn-menu-icon">
          <span className="index-btn-menu-icon-line">
          
          </span>
        </div>
      </div>
    )
  }

  handleMouseEnter = () => {
    this.setState({
      menuClass: 'index-btn-menu over',
    })
  }
  handleMouseLeave = () => {
    this.setState({
      menuClass: 'index-btn-menu',
    })
  }
}