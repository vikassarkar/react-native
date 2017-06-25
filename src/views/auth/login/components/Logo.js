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
	Image,
} from 'react-native';

/**
 * Import widget dependent Images
 */
import logoImg from '../../../../assets/images/logo.png';

/**
 * Create Logo widget
 */
export default class Logo extends Component {
	
    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
			</View>
		);
	}
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		width: 100,
		height: 58,
	}
});
