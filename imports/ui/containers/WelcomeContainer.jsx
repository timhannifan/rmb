import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Welcome from '../components/Welcome.jsx';

export default WelcomeContainer = createContainer(({}) => {

  return {
    content: Meteor.user()
  };

}, Welcome);
