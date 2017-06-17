import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'

const ContactUsForm = () => {
  console.log('this is contactUsForm')
  return (
    <ScrollView height={"100vh"}>
      <Center column>
        <h1>Contact Us!</h1>
        <p>Have questions? Email us!</p>
        <form>
          <Center column>
            <TextField floatingLabelText='Name' name="name"/>
            <TextField floatingLabelText='Email' name="email"/>
            <TextField floatingLabelText='Subject' name="subject"/>
            <TextField floatingLabelText="What's your feedback/question?" name="text"/>
            <RaisedButton type="submit" label='submit' style={{width: 100}} primary/>
          </Center>
        </form>
      </Center>
    </ScrollView>
  )
}

export default observer(ContactUsForm)
