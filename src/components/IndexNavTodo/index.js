import React, { Component } from 'react'
import './IndexNavTodo.css'

const TodoItem = (props) => (
  <li className="index-nav-todo-item">
    {props.content}
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
       <ul className="index-nav-todo">
         {
           navData.map((data, index) => (
             <TodoItem key={index} content={data.content}/>
           ))
         }
       </ul>
    )
  }
}
