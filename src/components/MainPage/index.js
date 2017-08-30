import React, { Component } from 'react'


import { observer } from 'mobx-react'

import indexClass from '../../store/storeIndexClass'
import IndexNavTodo from '../IndexNavTodo/index'
import IndexBtnMenu from '../IndexBtnMenu/index'
import MainPageContainer from '../MainPageContainer/index'

import './MainPage.css'

@observer
class MainPage extends Component {

  render() {
    return (
      <div className={`main-page is-home ${indexClass.homePageExtraClass}`}>
        <IndexNavTodo />
        <div className="main-page-header">
          <IndexNavTodo />
          <IndexBtnMenu />
        </div>
        <MainPageContainer />
      </div>
    )
  }
}
export default MainPage
