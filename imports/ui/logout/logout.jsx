import React from 'react';
import {Meteor} from 'meteor/meteor'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';

const HandleLogout = () => {
    Meteor.logout()
    LoginState.changeAuthenticated(false)
}

export default HandleLogout
