import React from 'react';
import {Meteor} from 'meteor/meteor'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import {observer} from 'mobx-react'
import LogInState from './client/state'

const Login = () => {
  let title = 'Login'
  let content = (
    <div>
      <form onSubmit={handleLogin}>
        <TextField onChange={handleLoginUsernameChange} style={{margin: 'auto'}} floatingLabelText='Username'/>
        <TextField onChange={handleLoginPasswordChange} style={{margin: 'auto'}} floatingLabelText='Password'/>
        <RaisedButton type='submit' label='submit' primary style={{width: 300, margin: 'auto'}}/>
        <RaisedButton onClick={()=>{LogInState.changeSignUp(true)}} label='Signup' style={{width: 300, margin: 'auto', marginTop: 10}}/>
      </form>
    </div>
  )
  if(LogInState.signUp){
    title = 'Signup'
    content = (
      <div>
        <form onSubmit={createUser}>
          <TextField onChange={handleCreateUsernameChange} style={{margin: 'auto'}} floatingLabelText='Username'/>
          <TextField onChange={handleCreatePasswordChange} style={{margin: 'auto'}} floatingLabelText='Password'/>
          <RaisedButton label='submit' type='submit' primary style={{width: 300, margin: 'auto'}}/>
          <RaisedButton onClick={()=>{LogInState.changeSignUp(false)}} secondary label='Cancel' style={{width: 300, margin: 'auto', marginTop: 10}}/>
        </form>
      </div>
    )
  }
  return(
    <Page
    style={{
      backgroundColor: 'lightblue'
    }}>
      <Center
      height={'100vh'}
      column>
        <VBox
        style={{
          width: 400,
          backgroundColor: 'white',
          padding: 50,
          textAlign: 'center',
          boxShadow: '3 3 3 rgba(0,0,0,.2)'}}>
          <h3>{title}</h3>
          {content}
        </VBox>
      </Center>
    </Page>
  )
}

export default observer(Login)

const handleCreateUsernameChange = (evt) => {
  LogInState.changeCreateUsername(evt.target.value)
}

const handleCreatePasswordChange = (evt) => {
  LogInState.changeCreatePassword(evt.target.value)
}

const handleLoginUsernameChange = (evt) => {
  LogInState.changeLoginUsername(evt.target.value)
}

const handleLoginPasswordChange = (evt) => {
  LogInState.changeLoginPassword(evt.target.value)
}

const handleLogin = (evt) => {
  evt.preventDefault()
  LogInState.handleAuthenticate()
}

const createUser = (evt) => {
  evt.preventDefault()
  let options = {
    username: LogInState.createUsername,
    password: LogInState.createPassword
  }
  Accounts.createUser(options, (err)=>{
    if(err){
      console.log(err)
    } else {
      Meteor.loginWithPassword(options.username, options.password, (err)=>{
        if(err){
          console.log(err)
        }
      })
    }
  })
}
