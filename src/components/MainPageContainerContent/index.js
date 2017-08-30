import React, { Component } from 'react'

import './style/index.css'
import Masterpiece from '../MainPageContainerContentMasterpiece/index'
import Blog from '../MainPageContainerContentBlog/index'

export default class MainPageContainerContent extends Component {

  render() {
    return (
      <div className="container-content">
        <Masterpiece />
        <Blog />
      </div>
    )
  }
}