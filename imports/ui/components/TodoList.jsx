import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Task from './Task.jsx';
import ReactDOM from 'react-dom';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
  
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  renderTasks() {
  	console.log(this);
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
      return (
       <Task key={task._id} 
             task={task} 
             showPrivateButton={showPrivateButton}
       />
      )
    });
  }
  render() {
    return (
      <div>
        
        { this.props.currentUser ?
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
           type="text"
           ref="textInput"
           placeholder="Type to add a new item"
           />
        </form>
        : 
          <div>
            <h4>You must be logged in to create a new item.</h4>
          </div>
        }

        <ul>
          {this.renderTasks()}
        </ul>

      </div>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};