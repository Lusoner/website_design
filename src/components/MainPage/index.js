import React, { Component } from 'react'


import { observer } from 'mobx-react'

import indexClass from '../../store/storeIndexClass'
import IndexNavTodo from '../IndexNavTodo/index'
import IndexBtnMenu from '../IndexBtnMenu/index'

import './MainPage.css'

@observer
class MainPage extends Component {
  render() {
    return (
      <div className={`main-page ${indexClass.homePageExtraClass}`}>
        <IndexNavTodo />
        <div className="main-page-header">
          {
            // <IndexNavTodo />
            <IndexBtnMenu />
          }
        </div>
      </div>
    )
  }
}
export default MainPage
