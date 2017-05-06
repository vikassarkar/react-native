
//in react-native-router-flux > src > NavBar.js
//line 488 chamge
//{renderBackButton(navProps) || renderLeftButton(navProps)}
//to
//{renderBackButton(navProps)}
//{renderLeftButton(navProps)}
//{renderRightButton(navProps)}

import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
  	Image,
	Alert,	
	BackAndroid
} from 'react-native';
import { 
	Router, 
	Scene, 
	Actions, 
	ActionConst,
	Reducer,
} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DashboardWidget from '../dashboard/DashboardWidget';
import HomeWidget from '../home/HomeWidget';
import SecondScreen from '../home/SecondScreen';

import logoImg from '../../assets/images/bell_white.png';
import backImg from '../../assets/images/left-arrow.png';

const reducerCreate = params => {
	  const defaultReducer = new Reducer(params);
	  return (state, action) => {
	    return defaultReducer(state, action);
	  }
}

export default class AppRouter extends Component {

	constructor(props) {
	    super(props)
	    this.state  = {}
	}  

	_handleAndroidBack(){
		return true;
	}

	_exitApp(){
		Alert.alert(
				'Exit',
				'Are you sure you want to exit this app',
				[
					{ text: 'Cancel', onPress: () => {} },
					{ text: 'YES', onPress: () => BackAndroid.exitApp() },
				]
			);
			return true;
	}

	_renderRightNav(){
		return(
			<View style={styles.rightButtonContainer}>						
						<FontAwesome
							name="user-circle-o"
							size={20}
							color="#fff"
							style={styles.rightIcons}
							onPress={() => this.props.toggleSideMenu()}/>
						<FontAwesome
							name="bell-o"
							size={20}
							color="#fff"
							style={styles.rightIcons}
							onPress={() => this.props.toggleSideMenu()}/>
						<FontAwesome
							name="search"
							size={20}
							color="#fff"
							style={styles.rightIcons}
							onPress={() => this.props.toggleSideMenu()}/>
					</View>
		)
	}

	_renderLeftNav(){
		return(
			<View style={styles.leftButtonContainer}>
						<FontAwesome
							name="bars"
							size={26}
							color="#fff"
							style={styles.rightIcons}
							onPress={() => this.props.toggleSideMenu()}/>							
						<Image source={logoImg} style={styles.logoImage}/>
			</View>
		)
	}

  	render() {
    	return (		
	      	<Router 
			  createReducer={reducerCreate} 
			  hideNavBar={false} 
			  navigationBarStyle={styles.navHeader}
			  titleStyle={styles.centerTitle}
			  leftButtonStyle={styles.navBack}
			  backButtonImage={backImg}
			  renderLeftButton={() => this._renderLeftNav()}
			  titleStyle={styles.navTitle}
			  renderRightButton={() => this._renderRightNav()}
			  onExitApp={() => this._exitApp()}>
			  {/*backAndroidHandler={() => this._handleAndroidBack()}>*/}
		      	<Scene key="root">
				   <Scene key="dashboard"
			          	component={DashboardWidget}
			          	title="Dashboard"
			        	animation="slide"						  	
						initial={true}/>	

			        <Scene key="home"
			          	component={HomeWidget}
			          	title="Home"
			        	animation="slide"/>	
 		
			        <Scene key="secondScreen"
			          	component={SecondScreen}
			          	animation="slide"
			          	title="SecondScreen"/>

		      	</Scene>
		    </Router>
    	);
  	}
}


const styles=StyleSheet.create({
		navHeader:{
			backgroundColor: '#00549A',
			alignSelf:'center',
			height:60,
		},
		navTitle:{
			color:'#fff'
		},
		navBack:{
			height:32,
			width:30,
		},
		leftButtonContainer: {
			width: '32%',
			flexDirection: 'row',
			alignItems: 'flex-start',
			marginLeft: 5,
			marginTop:-2,
			
		},
		rightButtonContainer: {
			width: '36%',
			flexDirection: 'row-reverse',
			alignItems: 'flex-end'
		},
		// centerContainer: {
		// 	width: '34%',
		// 	alignSelf: 'center'
		// },
		logoImage: {
			alignSelf: 'center',
			width: 58,
			height:30,
			marginLeft: 7
		},
		centerTitle: {
			color: '#fff',
			justifyContent: 'center',
			alignSelf: 'center',
			textAlign: 'center',
			fontSize: 18
		},
		rightIcons: {
			alignSelf: 'center',
			marginLeft: 16
		}
})
