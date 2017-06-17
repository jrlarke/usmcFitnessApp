import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import autorun from 'meteor/space:tracker-mobx-autorun'
import LogInState from '../imports/ui/login/client/state'

import { Main } from './components/main.jsx'

const onLoggedOut = autorun(() => {
  LogInState.isAuthenticated(!_.isNull(Meteor.user()))
})

if (Meteor.isClient) {
  Meteor.startup(()=>{
    onLoggedOut.start()
    injectTapEventPlugin()

    ReactDOM.render(<Main />, document.getElementById("render-target"));

    //Meteor.subscribe()

    // Tracker.autorun(function(){
      //subs ready
    // })
  })
}
