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
import { Actions, ActionConst } from 'react-native-router-flux';
import {Grid, Col, Row} from 'react-native-elements';

import SwitchPage from '../../../utils/SwitchPage';
import arrowImg from '../../../assets/images/left-arrow.png';

const SIZE = 40;


export default class RowDetailsWrapperWidget extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

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
                        <Text style={styles.textStyle}>Hi there This is Vikas!!</Text>
                        <Text style={styles.textStyle}>Nice to meet you.</Text>
                        <Text style={styles.textStyle}>I'll be updating data soon by REDUX.</Text>
                        <Text style={styles.textStyle}>See you then.</Text>
						<TouchableOpacity onPress={this._onPress}
							style={styles.button}
							activeOpacity={1}>
							<Image style={styles.image} source={arrowImg} />
						</TouchableOpacity>
						<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
                    </View>
                </Row>                    
                <Row size={30}>                      
                </Row>                    
            </Grid>	
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
    textStyle:{
        textAlign:'center',
        color:'#00549A',
        width:'100%',
        fontSize:18
    },
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	}
});