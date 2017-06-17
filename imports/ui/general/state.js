import { Meteor } from 'meteor/meteor';
import { observable, action, computed } from 'mobx'

class GeneralState {
  @observable shouldRender = 'form'

  @action changeShouldRender = (name) => {
    this.shouldRender = name
  }

  @computed get currentUser(){
    return Meteor.user()
  }

  @observable selectedTab = 1

  @action changeTab = (num) => {
  this.selectedTab = num
  }

}

const singleton = new GeneralState()
export default singleton
