
/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	BackAndroid
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import {
	Router,
	Scene,
	Actions,
	ActionConst,
	Reducer,
} from 'react-native-router-flux';

/**
 * Import widget required files
 */
import LoginWidget from '../auth/login/LoginWidget'
import RegisterWidget from '../auth/register/RegisterWidget'
import RecoverWidget from '../auth/recover/RecoverWidget'

/**
 * Create Auth router widget
 */
export default class AuthRouter extends Component {

	/**
     * Initillize constructor
     * @param {*} props - property attribute variables assigned in element
     */
	constructor(props) {
		super(props)
		this.state = {
			action: 'login'
		}
	}

	/**
	 * Routing on auth page
	 * @param {*} action 
	 */
	_onAuthRoute(action) {
		this.setState({
			action: action,
		});
	}

	/**
	 * Exit app popup if at last history route
	 */
	_exitApp() {
		Alert.alert(
			'Exit',
			'Are you sure you want to exit this app',
			[
				{ text: 'Cancel', onPress: () => { } },
				{ text: 'YES', onPress: () => BackAndroid.exitApp() },
			]
		);
		return true;
	}

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		return (
			<Router
				hideNavBar={true}
				onExitApp={() => this._exitApp()}>
				{/*backAndroidHandler={() => this._handleAndroidBack()}>*/}
				<Scene key="login">

					<Scene key="signin"
						component={LoginWidget}
						title="Signin"
						animation="slide"
						onButtonEvent={this.props.onButtonEvent}
						state={this.props.state}
						initial={true}
					/>

					<Scene key="register"
						component={RegisterWidget}
						animation="slide"
						title="Register"
						toggleMenu={this.props.toggleSideMenu}
					/>

					<Scene key="recover"
						component={RecoverWidget}
						animation="slide"
						title="Recover"
						toggleMenu={this.props.toggleSideMenu}
					/>

				</Scene>
			</Router>
		);
	}
};



{/*<View>
	{this.props.state.isLoggedIn && 
	<PageLoader/>
}
{ !this.props.state.isLoggedIn && this.state.action == 'login' &&
	<LoginWidget  
		onButtonEvent = {this.props.onButtonEvent} 
		state={this.props.state}
		onAuthRoute={(action) => this._onAuthRoute(action)}/>
}
{ !this.props.state.isLoggedIn && this.state.action == 'register' &&
	<RegisterWidget  
		onAuthRoute={(action) => this._onAuthRoute(action)}/>
}
 </View>*/}