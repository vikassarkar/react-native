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
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Actions, ActionConst } from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-elements';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../assets/styles/style.color.palletes';
import store from '../../../reduxconfig/store/StoreConfiguration';
import RouteActions from '../../routers/RouteActions';

/**
 * Import widget required images
 */
import arrowImg from '../../../assets/images/left-arrow.png';

/**
 * define widget constants
 */
const SIZE = 40;

/**
 * Create roe details widget
 */
export default class RowDetailsWrapperWidget extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
	constructor() {
		super();
		this.state = {
			isLoading: false,
			rowDetails: store.getState().TableReducer.RowDetails || {}
		};
		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	/**
	 * On back button click event
	 */
	_onPress() {
		if (this.state.isLoading) return;
		this.setState({ isLoading: true });
		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();
		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	/**
	 * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
	 */
	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});
		return (
			<Grid>
				<Row size={30}>
				</Row>
				<Row size={30}>
					<View style={styles.container}>
						<Text style={styles.textStyle}>DATA PROVIDED BY REDUX</Text>
						<Text style={styles.textStyle}>Row Title : {this.state.rowDetails.title}</Text>
						<Text style={styles.textStyle}>Row Description : {this.state.rowDetails.description}</Text>
						<TouchableOpacity onPress={this._onPress}
							style={styles.button}
							activeOpacity={1}>
							<Image style={styles.image} source={arrowImg} />
						</TouchableOpacity>
						<Animated.View style={[styles.circle, { transform: [{ scale: changeScale }] }]} />
					</View>
				</Row>
				<Row size={30}>
				</Row>
			</Grid>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		textAlign: 'center',
		color: ColorPalletes.bellBlue,
		width: '100%',
		fontSize: 18
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: ColorPalletes.bellBlue,
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: ColorPalletes.bellBlue,
	},
	image: {
		width: 24,
		height: 24,
	}
});