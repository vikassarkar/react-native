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
	Text,
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Actions, ActionConst } from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-elements';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';

/**
 * Create route links on login 
 */
export default class LoginLinkSection extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
	constructor(props) {
		super(props)
		this.state = {}
	}

	/**
	 * Redirect to register page
	 */
	_regiterUser() {
		Actions.register()
	}

	/**
	 * Redirect to Recover page
	 */
	_recoverUser() {
		Actions.recover()
	}

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		return (
			<Grid style={styles.linkContainer}>
				<Row>
					<Col size={50}><Text style={styles.linkTextCreate} onPress={() => this._regiterUser()}>New in Bell?</Text></Col>
					<Col size={50}><Text style={styles.linkTextForget} onPress={() => this._recoverUser()}>Forgot Password?</Text></Col>
				</Row>
			</Grid>
		);
	}
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
	linkContainer: {
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	linkTextCreate: {
		color: ColorPalletes.lightGrey,
		textAlign: 'left'
	},
	linkTextForget: {
		color: ColorPalletes.lightGrey,
		alignItems: 'flex-end',
		textAlign: 'right'
	},
});
