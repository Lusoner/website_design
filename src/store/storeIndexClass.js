import { observable, action, computed } from 'mobx'

export class IndexClass {
  @observable isScrolled = false
  @action triggerScrollStatus = () => {
    this.isScrolled = !this.isScrolled
  }
  @computed get homePageExtraClass() {
    return this.isScrolled ? 'is-scrolled' : ''
  }
}
const indexClass = new IndexClass()
export default indexClass
