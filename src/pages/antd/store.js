import { observable, action } from 'mobx'

class mainStore {
  //定义状态并使其可观察
  @observable navBarText = 'ddd'

  //定义动作更改状态
  @action setNavBarText = (values) => {
    this.navBarText = values
  }
}

export default {
  mainStore: new mainStore()
}
