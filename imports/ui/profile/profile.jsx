import React from 'react';
import {Meteor} from 'meteor/meteor'
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'
import LogInState from '../login/client/state'

const renderContent = () => {
  let content
    content = (
      <ScrollView height={"100vh"}>
        <Center column>
          <div>
            <h1>This is the profiles component</h1>
            <RaisedButton onClick={HandleLogout} label='Logout' style={{width: 300, margin: 'auto', marginTop: 10}}/>
          </div>
        </Center>
      </ScrollView>
    )
    return content
  }

  const HandleLogout = () => {
      Meteor.logout()
      LogInState.changeAuthenticated(false)
  }

  const Profile = ({profile}) => {
    return (
      <div>
        {renderContent()}
      </div>
    )
  }

  // Form.propTypes = {
  //   plans: React.PropTypes.string
  // }

  export default observer(Profile)
