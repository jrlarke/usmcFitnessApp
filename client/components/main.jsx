import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'
import { observer } from 'mobx-react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import GeneralState from '../../imports/ui/general/state'
import LoginState from '../../imports/ui/login/client/state'
import Login from '../../imports/ui/login/login';
import ContactUsForm from '../../imports/ui/contactUs/contactUs';
import TabNav from '../../imports/ui/tabNav/tabNav';
import Form from '../../imports/ui/form/form';
import Plans from '../../imports/ui/myPlans/myPlans';
import Profile from '../../imports/ui/profile/profile';

export const Main = observer(React.createClass({
  displayName: "Main",
  // childContextTypes:{
  //   muiTheme: React.PropTypes.object
  // },
  // getChildContext(){
  //   return{
  //     muiTheme: getMuiTheme(theme)
  //   }
  // },

  _getContent(){
    let content
    switch (GeneralState.selectedTab) {
      case 1:
        content = <Form />
        break;
      case 2:
        content = <Plans />
        break;
      case 3:
        content = <Profile />
        break;
      default:
    }
    return content
  },
  render(){
    if (!LoginState.authenticated) {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Login/>
        </MuiThemeProvider>
      )
    } else {
      return (
        //buttons here are at the top of the page, change the state between form and workouts
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Page style={{backgroundColor: '#ffffff'}}>
          {this._getContent()}
          <TabNav selected={GeneralState.selectedTab}/>
          </Page>
        </MuiThemeProvider>
      )
    }
  }
})
)
