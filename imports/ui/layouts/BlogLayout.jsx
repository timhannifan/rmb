import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import BurgerMenu from 'react-burger-menu';
import { FlowRouter } from 'meteor/kadira:flow-router';
// set the animation for the menu
const Menu = BurgerMenu['stack'];

export default class BlogLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	menuOpen: false
    };
  }
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  renderLayout() {
    return (
    	<div>
			  {this.props.content}
		  </div>
		);
  }
  render() {
  	let self = this;
  	let templateState = self.state.menuOpen;
		
		function setTemplateState (state) {
			self.setState({
			  menuOpen: state
			});	
		};
  	let isMenuOpen = function(props) {
  		if (props.isOpen != templateState) {
  			setTemplateState(props.isOpen);
  		}
		  return props.isOpen;
		};
    
    return (
			<div id="outer-container">			
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>        
				  <a key="0" href="/" onClick={ this.toggleMenu.bind(this) }><span>Home</span></a>
				  <a key="1" href="/list" onClick={ this.toggleMenu.bind(this) }><span>List</span></a>
			  </Menu>
			  <main id="page-wrap">
		    	{this.props.content}
  		  </main>
  		</div>
		);
  }
}