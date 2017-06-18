import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class FormState {
  @observable showPft = false

  @action setShowPft = (bool) => {
    this.showPft = bool
  }

  @observable showCft = false

  @action setShowCft = (bool) => {
    this.showCft = bool
  }
}

const singleton = new FormState()
export default singleton
