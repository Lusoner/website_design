import React, { Component } from 'react'

import './style/index.css'

const summaryData = [
  {content: '测试文字一一一一一一一'},
  {content: '测试文字二文字二文字二'},
  {content: '测试文字三文字三文字'},
  {content: '测试文字四文字四文字四文字'},
  {content: '测试文字五文字五'},
]

const SummaryItem = (props) => (
  <span className="container-content-masterpiece-summary-item is-showed">
    <span>
      {props.content}
    </span>
  </span>
)

const elementData = [
  {
    imgUrl: 'http://img5.duitang.com/uploads/item/201411/30/20141130235625_H5yuH.thumb.700_0.jpeg',
    headline: '测试文字',
    desc: '一大堆测试文字一大堆测试文字一大堆测试文字',
  },
  {
    imgUrl: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=ea57f833b91bb0519b29bb6b5e13b0c1/f9198618367adab409cdef5281d4b31c8701e486.jpg',
    headline: '测试文字',
    desc: '一大堆测试文字一大堆测试文字一大堆测试文字',
  },
  {
    imgUrl: 'http://img.zcool.cn/community/013b82555d98f40000009af08abaa4.jpg@900w_1l_2o_100sh.jpg',
    headline: '测试文字',
    desc: '一大堆测试文字一大堆测试文字一大堆测试文字',
  },
  {
    imgUrl: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=ea57f833b91bb0519b29bb6b5e13b0c1/f9198618367adab409cdef5281d4b31c8701e486.jpg',
    headline: '测试文字',
    desc: '一大堆测试文字一大堆测试文字一大堆测试文字',
  },
]
const ElementItem = (props) => (
  <div className="container-content-masterpiece-element">
    <div className="container-content-masterpiece-element-visual is-showed">
      <img src={props.imgUrl} alt="" />
    </div>
    <div className="container-content-masterpiece-element-body is-showed">
      <h3 className="container-content-masterpiece-element-headline">
       { props.headline }
      </h3>
      <p className="container-content-masterpiece-element-description">
        { props.desc }
      </p>
    </div>
  </div>
)

export default class MainPageContainerContentMasterpiece extends Component {

  render() {
    return (
      <div className="container-content-masterpiece">
        <div className="container-content-masterpiece-bg">
          <div className="container-content-masterpiece-bg-square">
          </div>
          <div className="container-content-masterpiece-bg-circle">
          </div>
          <div className="container-content-masterpiece-bg-line1">
          </div>
          <div className="container-content-masterpiece-bg-line2">
          </div>
          <div className="container-content-masterpiece-bg-line3">
          </div>
          <p className="container-content-masterpiece-headline">
            <span className="container-content-masterpiece-headline-txt1"></span>
            <span className="container-content-masterpiece-headline-txt2"></span>
          </p>
        </div>
        <div className="container-content-masterpiece-body page-content-small">
          <div className="container-content-masterpiece-summary">
            {
              summaryData.map((item, index) => (
                <SummaryItem key={index} content={item.content} />
              ))
            }
          </div>
          <div className="container-content-masterpiece-elements">
            {
              elementData.map((item, index) => (
                <ElementItem
                  key={index}
                  imgUrl={item.imgUrl}
                  headline={item.headline}
                  desc={item.desc}
                />
              ))
            }
          </div>
          <div className="container-content-masterpiece-titles">
            <h2 className="container-content-masterpiece-title">测试品鉴文字</h2>
            <a href="www.baidu.com" className="container-content-masterpiece-more">详情</a>
          </div>
        </div>
      </div>
    )
  }
}