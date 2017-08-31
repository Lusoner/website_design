import React, { Component } from 'react'
import { lazyload } from 'react-lazyload'

import './style/index.css'

const blogPapersData = [
  {
    link: 'www.baidu.com',
    coverImg: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=ea57f833b91bb0519b29bb6b5e13b0c1/f9198618367adab409cdef5281d4b31c8701e486.jpg',
    title: '这是一个很长的测试标题这是一个很长的测试标题',
    desc: '这是一个很长的预览文，这是一个很长的预览文，这是一个很长的预览文'
  },
  {
    link: 'www.baidu.com',
    coverImg: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=ea57f833b91bb0519b29bb6b5e13b0c1/f9198618367adab409cdef5281d4b31c8701e486.jpg',
    title: '这是一个很长的测试标题这是一个很长的测试标题',
    desc: '这是一个很长的预览文，这是一个很长的预览文，这是一个很长的预览文'
  },
  {
    link: 'www.baidu.com',
    coverImg: 'http://img.zcool.cn/community/013b82555d98f40000009af08abaa4.jpg@900w_1l_2o_100sh.jpg',
    title: '这是一个很长的测试标题这是一个很长的测试标题',
    desc: '这是一个很长的预览文，这是一个很长的预览文，这是一个很长的预览文'
  }
]

const BlogPaper = (props) => (
  <div className="container-content-blog-paper">
    <a href={props.link}>
      <div className="container-content-blog-paper-visual is-showed">
        <img src={props.coverImg} alt="" />
        <div className="container-content-blog-paper-visual-frame"></div>
      </div>
      <div className="container-content-blog-paper-body is-showed">
        <h3 className="container-content-blog-paper-title">
          { props.title }
        </h3>
        <p className="container-content-blog-paper-description">
          { props.desc }
        </p>
        <div className="container-content-blog-paper-more">详情</div>
      </div>
    </a>
  </div>
)

@lazyload({
  height: 200,
  once: true,
  overflow: true,
  fadein: true,
})
export default class MainPageContainerContentBlog extends Component {

  render() {
    return (
      <div className="container-content-blog">
        <div className="container-content-blog-bg">
          <div className="container-content-blog-bg-pattern1"></div>
          <div className="container-content-blog-bg-pattern2"></div>
          <p className="container-content-blog-headline"></p>
        </div>
        <div className="container-content-blog-body page-content-small">
          <div className="container-content-blog-titles">
            <h2 className="container-content-blog-title">模块二预览</h2>
            <a href="www.baidu.com" className="container-content-blog-more">详情</a>
          </div>
          <div className="container-content-blog-paper-group">
          {
            blogPapersData.map((item, index) => (
              <BlogPaper
                key={index}
                link={item.link}
                coverImg={item.coverImg}
                title={item.title}
                desc={item.desc}
              />
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}