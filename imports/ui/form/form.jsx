import React from 'react';
import FormState from './state';
import GeneralState from '../general/state';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import Cft from '../cft/cft';
import Pft from '../pft/pft';

const renderContent = () => {
  let content
  if(FormState.showPft){
    content = <Pft/>
  } else if(FormState.showCft){
    content = <Cft/>
  } else {
    content = (
      <ScrollView height={"100vh"}>
        <Center column>
          <h1>{name}</h1>
          <h1>My Fitness App</h1>
          <p>Thanks for checking out my app! Choose a button below to pick a workout plan
          catered towards your goals.</p>
          <RaisedButton onClick={pftPlan} label='PFT' style={{width: 300, margin: 'auto', marginTop: 10}}/>
          <RaisedButton onClick={cftPlan} label='CFT' style={{width: 300, margin: 'auto', marginTop: 10}}/>
        </Center>
      </ScrollView>
    )
  }
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

const pftPlan = (evt) => {
  evt.preventDefault()
  FormState.setShowPft(true)
  GeneralState.changeShouldRender('pft')
}

const cftPlan = (evt) => {
  evt.preventDefault()
  FormState.setShowCft(true)
  GeneralState.changeShouldRender('cft')
}

export default observer(Form)
