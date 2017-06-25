/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TextInput,
	Text,
	Animated
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Grid, Col, Row } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';
import LoginButton from './LoginButton';

/**
 * Create Loginform widget
 */
export default class LoginForm extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			formUsername: '',
			formPassword: '',
			displayLabelUsername: false,
			displayLabelPassword: false,
			labelUsername: new Animated.Value(35), // inits to zero
			labelPassword: new Animated.Value(35)
		};
	}

	/**
	 * event when input field changed
	 * @param {*} feildName 
	 * @param {*} val 
	 */
	_loginInputChanged(feildName, val) {
		if (feildName == "username") {
			this.setState({ formUsername: val });
		} else if (feildName == "password") {
			this.setState({ formPassword: val });
		}
	}

	/**
	 * event when input feild focused
	 * @param {*} feildName 
	 */
	_loginInputFocused(feildName) {
		if (feildName == "username") {
			this.setState({ displayLabelUsername: true, displayLabelPassword: false })
			Animated.timing(this.state.labelUsername, {
				toValue: 20,
				duration: 200,
			}).start()
		} else if (feildName == "password") {
			Animated.timing(this.state.labelPassword, {
				toValue: 20,
				duration: 200,
			}).start();
			this.setState({ displayLabelPassword: true, displayLabelUsername: false })
		}
	}

	/**
	 * event when input feild blured
	 * @param {*} feildName 
	 */
	_loginInputBlured(feildName) {
		let self = this;
		if (feildName == "username") {
			Animated.timing(this.state.labelUsername, {
				toValue: 20,
				duration: 200,
			}).start(this.setState({ labelUsername: new Animated.Value(35) }))
			setTimeout(function () {
				self.setState({ displayLabelUsername: false })
			}, 300)
		} else if (feildName == "password") {
			Animated.timing(this.state.labelPassword, {
				toValue: 20,
				duration: 200,
			}).start(this.setState({ labelPassword: new Animated.Value(35) }))
			setTimeout(function () {
				self.setState({ displayLabelPassword: false })
			}, 300)
		}
	}

	/**
	 * Animate lable of input on focus
	 * @param {*} feildName 
	 */
	_renderAnimateLabel(feildName) {
		if (feildName == "Username") {
			return (
				<Animated.View
					style={{
						top: this.state.labelUsername
					}}>
					<Text style={styles.labelInputs}>{feildName}</Text>
				</Animated.View>
			);
		} else if (feildName == "Password") {
			return (
				<Animated.View
					style={{
						top: this.state.labelPassword
					}}>
					<Text style={styles.labelInputs}>{feildName}</Text>
				</Animated.View>
			);
		}
	}

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		return (
			<Grid>
				<Row size={70}>
					<View style={styles.formContainer}>
						<View style={styles.formUsername}>
							{this.state.displayLabelUsername &&
								this._renderAnimateLabel("Username")
							}
							<FontAwesome
								name="user"
								size={25}
								style={styles.iconStyle} />
							<TextInput
								onChangeText={(val) => this._loginInputChanged("username", val)}
								onFocus={() => this._loginInputFocused("username")}
								onBlur={() => this._loginInputBlured("username")}
								placeholder="Enter username.."
								value={this.state.formUsername}
								maxLength={40}
								placeholderTextColor={ColorPalletes.lightGrey}
								underlineColorAndroid="transparent"
								inlineImageLeft="usernameImg"
								style={styles.usernameInput}
								autoCorrect={false}
								returnKeyLabel='next'
								blurOnSubmit={true} />
						</View>
						<View style={styles.formPassword}>
							{this.state.displayLabelPassword &&
								this._renderAnimateLabel("Password")
							}
							<FontAwesome
								name="unlock"
								size={25}
								style={styles.iconStyle} />
							<TextInput
								onChangeText={(val) => this._loginInputChanged("password", val)}
								onFocus={() => this._loginInputFocused("password")}
								onBlur={() => this._loginInputBlured("password")}
								placeholder="Enter password.."
								value={this.state.formPassword}
								maxLength={12}
								placeholderTextColor={ColorPalletes.lightGrey}
								secureTextEntry={true}
								underlineColorAndroid="transparent"
								inlineImageLeft="passwordImg"
								style={styles.passwordInput}
								autoCorrect={false}
								returnKeyLabel='next'
								blurOnSubmit={true} />
						</View>
					</View>
				</Row>
				<Row size={30}>
					<LoginButton style={styles.loginButton} onLoginEvent={(comp) => this.props.onLoginEvent(comp)} state={this.state} />
				</Row>
			</Grid>
		);
	}
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
	formContainer: {
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	formUsername: {
		width: '100%',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 5,
		paddingBottom: 20,
		alignSelf: 'center',
	},
	formPassword: {
		width: '100%',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 5,
		paddingBottom: 5,
		alignSelf: 'center',
	},
	usernameInput: {
		width: '100%',
		alignSelf: 'center',
		borderColor: ColorPalletes.lightGrey,
		borderBottomWidth: 0.5,
		fontSize: 16,
		color: ColorPalletes.lightGrey,
		paddingBottom: -3,
		paddingLeft: 35
	},
	passwordInput: {
		width: '100%',
		alignSelf: 'center',
		borderColor: ColorPalletes.lightGrey,
		borderBottomWidth: 0.5,
		fontSize: 16,
		color: ColorPalletes.lightGrey,
		paddingBottom: -3,
		paddingLeft: 35
	},
	labelInputs: {
		color: ColorPalletes.bellBlue,
		fontSize: 16,
		paddingLeft: 1
	},
	iconStyle: {
		color: ColorPalletes.bellBlue,
		top: 35,
		left: 0
	},
	loginButton: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
