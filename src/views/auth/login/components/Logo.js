import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';


import logoImg from '../../../../assets/images/logo.png';

export default class Logo extends Component {
	render() {
		return (			
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width:'100%',
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
