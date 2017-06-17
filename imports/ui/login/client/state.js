import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class LogInState {
  @observable authenticated = false 

  @action isAuthenticated = (bool) => {
    this.authenticated = bool
  }

  @action handleAuthenticate = () => {
    Meteor.loginWithPassword(this.loginUsername, this.loginPassword, (err)=>{
    if(err){
      console.log(err)
    } else {
      this.authenticated = true
    }
  })
  }

  @observable signUp = false

  @observable createUsername = ''

  @observable createPassword = ''

  @observable loginUsername = ''

  @observable loginPassword = ''

  @action changeSignUp = (bool) => {
    this.signUp = bool
  }

  @action changeCreateUsername = (username) => {
    this.createUsername = username
  }

  @action changeCreatePassword = (password) => {
    this.createPassword = password
  }

  @action changeLoginUsername = (username) => {
    this.loginUsername = username
  }

  @action changeLoginPassword = (password) => {
    this.loginPassword = password
  }
}

const singleton = new LogInState()
export default singleton
