import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';
import TodoList from '../components/TodoList.jsx';


export default class AppContainer extends Component {
  render() {
  	console.log(this);
    return (
      <div className="container">
	      <header>
	      	<AccountsUIWrapper/>
	      </header>

        <TodoList/>


      </div>
    );
  }
}