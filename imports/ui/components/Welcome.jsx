// import React from 'react';

// const Welcome = ({content}) => (
//   <div>
//     <h5>Welcome!</h5>

//   </div>
// );

// export default Welcome;

import React, { Component, PropTypes } from 'react';

export default class Welcome extends Component {
  render() {
  	console.log(this);

  	return (
  		<div>Welcome</div>
		)
  }
}