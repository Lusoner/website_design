import { observable, action, computed } from 'mobx'

export class IndexClass {
  @observable isScrolled = false
  @observable isNavOpen = false

  @action triggerScrollStatus = (status) => {
    this.isScrolled = (status !== undefined) ? status : !this.isScrolled
  }
  @action triggerNavStatus = () => {
    this.isNavOpen = !this.isNavOpen
  }

  @computed get homePageExtraClass() {
    const classScroll = this.isScrolled ? 'is-scrolled' : ''
    const classNavOpen = this.isNavOpen ? 'is-nav-open' : ''
    return `${classScroll} ${classNavOpen}`
  }
}
const indexClass = new IndexClass()
export default indexClass
