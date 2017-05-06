import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';

import bgSrc from '../../../../assets/images/backgroundsWallpaper.jpg';

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={styles.picture} source={bgSrc}>
				{this.props.children}
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
});
