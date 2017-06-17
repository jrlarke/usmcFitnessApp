import React from 'react';
import FormState from './state'
import GeneralState from '../general/state'
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'

const renderContent = () => {
  let content
    content = (
      <ScrollView height={"100vh"}>
        <Center column>
          <h1>{name}</h1>
          <h1>My Fitness App</h1>
          <p>Thanks for checking out my app!</p>
        </Center>
      </ScrollView>
    )
    return content
  }

const Form = ({name}) => {
  return (
    <div>
      {renderContent()}
    </div>
  )
}

Form.propTypes = {
  name: React.PropTypes.string
}

export default observer(Form)
