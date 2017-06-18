import React from 'react';
import {Meteor} from 'meteor/meteor'
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'
import LogInState from '../login/client/state'
import FormState from '../form/state';
import GeneralState from '../general/state';

const renderContent = () => {
  let content
    content = (
      <ScrollView height={"100vh"}>
        <Center column>
          <div>
            <h1>This is the PFT component</h1>
            <RaisedButton onClick={goBack} label='Back' style={{width: 300, margin: 'auto', marginTop: 10}}/>
          </div>
        </Center>
      </ScrollView>
    )
    return content
  }

const goBack = (evt) => {
  evt.preventDefault()
  FormState.setShowPft(false)
  GeneralState.changeShouldRender('form')
}

const Pft = () => {
  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default observer(Pft)
