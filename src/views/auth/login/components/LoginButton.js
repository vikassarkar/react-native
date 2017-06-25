import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
	View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {UserAction} from '../../../../reduxconfig/actions/EmmitActions';
import store from '../../../../reduxconfig/store/StoreConfiguration';

export default class LoginButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading:false,
			isLoggedIn: false,
            username : ''
		};
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		let self = this;
		this.setState({isLoading:true});
		//on login succes call below timeout methods
		this.setState({isLoading: false, isLoggedIn: true });
		setTimeout(() => {
			this._onGrow(); //call when login success
		}, 1000);
		setTimeout(() => {		  
			store.dispatch(UserAction({userName:this.props.state.formUsername}));
			this.growAnimated.setValue(0);
			this.props.onLoginEvent(this);				        	
		}, 1500);

		//on failure call dialog for info to user
	}

	_onGrow() {	     
		Animated.timing(this.growAnimated,{
				toValue: 1,
				duration: 300,
				easing: Easing.linear
		}).start();
		
	}

	render() {
	  	const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 40]
		});
		return (
			<View style={styles.signInButtonContainer}>
					<TouchableOpacity style={styles.signInButton}
						onPress={() => this._onPress()}
						activeOpacity={1} >								
								<Text style={styles.signInText}>Sign in</Text>
								{ this.state.isLoading &&
									<FontAwesome
										name="spinner"
										size={25}
										style={styles.iconStyle}/>
									}
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({

	signInButtonContainer: {
		width:'100%',
		position:'absolute',
		paddingLeft:20,
		paddingRight:20,
		bottom:0
	},
	signInButton: {
		width:'100%',
		alignSelf: 'center',
		justifyContent: 'center',
		padding:15,
		backgroundColor:'#00549A',
		zIndex:99,
	},
	iconStyle:{
		alignSelf: 'center',
		justifyContent: 'center'
	},
	signInText: {
		color: '#D3D3D3',
		alignSelf: 'center',
		justifyContent: 'center',
		marginRight:5
	},
	circle: {
		height: 40,
		width: 40,
		marginTop: -40,
		borderWidth: 1,
		borderColor: '#00549A',
		borderRadius: 100,
		alignSelf: 'center',
		backgroundColor: '#00549A',
		zIndex:9,
	},
	
});
