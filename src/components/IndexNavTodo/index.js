import React, { Component } from 'react'
import './IndexNavTodo.css'

const TodoItem = (props) => (
  <li className="page-nav-list-item">
    <a href={props.href}>
      <span>{props.content}</span>
    </a>
  </li>
)
const navData = [
  {
    content: '首页',
    href: 'www.baidu.com',
  },
  {
    content: '导航一',
    href: 'www.baidu.com',
  },
  {
    content: '导航二',
    href: 'www.baidu.com',
  },
  {
    content: '导航三',
    href: 'www.baidu.com',
  },
]

export default class IndexNavTodo extends Component {
  render() {
    return (
      <div className="page-nav">
        <div className="page-nav-inner">
          <div className="page-nav-cont">
            <ul className="page-nav-list">
              {
                navData.map((data, index) => (
                  <TodoItem key={index} content={data.content}/>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
