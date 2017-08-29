import React, { Component } from 'react'


import { observer } from 'mobx-react'

import indexClass from '../../store/storeIndexClass'
// import IndexNavTodo from '../IndexNavTodo/index'
import IndexBtnMenu from '../IndexBtnMenu/index'

import './MainPage.css'

console.info(observer)

class MainPage extends Component {
  render() {
    console.info('indexClass', indexClass)
    return (
      <div className={`main-page ${indexClass.homePageExtraClass}`}>
        {
          // <IndexNavTodo />
        }
        <IndexBtnMenu />
      </div>
    )
  }
}
export default MainPage
