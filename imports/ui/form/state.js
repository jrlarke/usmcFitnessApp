import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class FormState {
}

const singleton = new FormState()
export default singleton
