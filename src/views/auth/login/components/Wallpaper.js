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
	Image,
} from 'react-native';

/**
 * Import widget dependent Images
 */
import bgSrc from '../../../../assets/images/backgroundsWallpaper.jpg';

/**
 * Create wallpaper widget
 */
export default class Wallpaper extends Component {
	
    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		return (
			<Image style={styles.picture} source={bgSrc}>
				{this.props.children}
			</Image>
		);
	}
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
	picture: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
});
