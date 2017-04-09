import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import TodoListContainer from '../../ui/containers/TodoListContainer.jsx';
import WelcomeContainer from '../../ui/containers/WelcomeContainer.jsx';
import BlogLayout from '../../ui/layouts/BlogLayout.jsx';

FlowRouter.route('/', {
	name: "home",
  action() {
  	mount(BlogLayout, {
  	  content: <WelcomeContainer/>
  	});
  },
});

FlowRouter.route('/list', {
  name: "list",
  action() {
    mount(BlogLayout, {
      content: <TodoListContainer/>
    });
  },
});