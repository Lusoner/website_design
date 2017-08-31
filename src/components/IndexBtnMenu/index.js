import React, { Component } from 'react'
import { observer } from 'mobx-react'

import indexClass from '../../store/storeIndexClass'

import './style/index.css'

@observer
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
        onClick={indexClass.triggerNavStatus}
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