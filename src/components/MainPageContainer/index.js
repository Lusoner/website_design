import React, { Component } from 'react'
import { observer } from 'mobx-react'

import indexClass from '../../store/storeIndexClass'
import MainPageContainerHeader from '../MainPageContainerHeader/index'
import MainPageContainerContent from '../MainPageContainerContent/index'

import './style/index.css'

@observer
export default class MainPageContainer extends Component {
  constructor(props) {
    super(props)
    this.handleScroll.bind(this)
  }
  render() {
    return (
      <div
        ref="root"
        id="page-container"
        className="page-container"
        onScroll={this.handleScroll}
      >
        <div className="container-main">
          <MainPageContainerHeader />
          <MainPageContainerContent />
        </div>
      </div>
    )
  }

  handleScroll = () => {
    if(this.refs.root.scrollTop > 130) {
      indexClass.triggerScrollStatus(true)
    } else {
      indexClass.triggerScrollStatus(false)
    }
  }
}