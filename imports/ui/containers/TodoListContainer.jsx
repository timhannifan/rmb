import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TodoList from '../components/TodoList.jsx';
import { Tasks } from '../../api/tasks.js';

export default TodoListContainer = createContainer(({}) => {

  Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  };

}, TodoList);
