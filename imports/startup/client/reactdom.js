import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import '../both/accounts-config.js';
import App from '../../ui/containers/AppContainer.jsx';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});