import React from 'react';
import GeneralState from '../general/state';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'

const renderContent = () => {
  let content
    content = (
      <ScrollView height={"100vh"}>
        <Center column>
          <h1>This is the new myPlans component</h1>
        </Center>
      </ScrollView>
    )
    return content
  }

  const Plans = ({plans}) => {
    return (
      <div>
        {renderContent()}
      </div>
    )
  }

  // Form.propTypes = {
  //   plans: React.PropTypes.string
  // }

  export default observer(Plans)
