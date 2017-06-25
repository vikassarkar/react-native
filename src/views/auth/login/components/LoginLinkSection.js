/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { 
	Actions, 
	ActionConst 
} from 'react-native-router-flux';
import {Grid, Col, Row} from 'react-native-elements';

export default class LoginLinkSection extends Component {
	constructor(props){
		super(props)
		this.state={}
	}

	_regiterUser(){
		Actions.register()	 
	}

	_recoverUser(){
		Actions.recover()	 
	}

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
}

const styles = StyleSheet.create({
	linkContainer: {
		width:'100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding:20,
	},
	linkTextCreate: {
		color: '#D3D3D3',
		textAlign:'left'
	},
	linkTextForget: {
		color: '#D3D3D3',
		alignItems:'flex-end',
		textAlign:'right'
	},
});
