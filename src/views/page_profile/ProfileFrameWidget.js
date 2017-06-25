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
	ScrollView,
	Text
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

/**
 * Import widget required files
 */
import ColorPalletes from '../../assets/styles/style.color.palletes';

/**
 * Import widget dependent Images
 */
import profileImg from '../../assets/images/profile.jpg';

/**
 * Import widget dependent Mock data
 */
import AccordData from '../../mockstubs/AccordionData';

/**
 * define widget constants
 */
const SIZE = 40;
const CONTENT = AccordData.content;

/**
 * Create profile page widget
 */
export default class ProfileFrameWidget extends Component {

	/**
	 * Initillize constructor
	 */
	constructor() {
		super();
		this.state = {
			activeSection: false
		};
	}

	/**
	 * create accordian header
	 * @param {*} section 
	 * @param {*} i 
	 * @param {*} isActive 
	 */
	_renderHeader(section, i, isActive) {
		return (
			<View style={[styles.header, isActive ? styles.active : styles.inactive]}>
				<Text style={styles.headerText}>{section.title}</Text>
				{isActive &&
					<FontAwesome
						name="angle-down"
						size={30}
						color="#FFFFFF"
						style={styles.backIcon} />
				}
				{!isActive &&
					<FontAwesome
						name="angle-up"
						size={30}
						color="#FFFFFF"
						style={styles.backIcon} />
				}
			</View>
		);
	}
	/**
	 * ceate content of accordian
	 * @param {*} section 
	 * @param {*} i 
	 * @param {*} isActive 
	 */
	_renderContent(section, i, isActive) {
		return (
			<View style={[styles.content]}>
				<Text>>{section.content}</Text>
			</View>
		);
	}

	/**
	 * set active accord
	 * @param {*} section 
	 */
	_setSection(section) {
		this.setState({ activeSection: section });
	}

	/**
	 * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
	 */
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.profileImageHolder}>
					<Image source={profileImg} style={styles.image} />
					<Text style={[styles.customerDetails, styles.customerId]}>1010232345</Text>
					<Text style={[styles.customerDetails, styles.customerName]}>Vikas Sarkar</Text>
					<Text style={[styles.customerDetails, styles.customerAddress]}>Pune, Magarpatta, India - 411013</Text>
				</View>
				<ScrollView>
					<View style={styles.scrollView}>
						<Accordion
							activeSection={this.state.activeSection}
							sections={CONTENT}
							renderHeader={this._renderHeader}
							renderContent={this._renderContent}
							duration={400}
							onChange={this._setSection.bind(this)}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
};

/**
 * Create  widget styles
 */
const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorPalletes.white,
		marginTop: 60
	},
	profileImageHolder: {
		backgroundColor: ColorPalletes.bellBlue,
		justifyContent: 'center',
		padding: 10,
		width: '100%',
		height: 250,
		position: 'absolute',
		zIndex: 9,
		top: 0
	},
	scrollView: {
		width: '96%',
		height: '100%',
		marginTop: 260,
		alignItems: 'center',
		alignSelf: 'center',
	},
	image: {
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		width: 130,
		height: 130,
		borderRadius: 70,
		borderWidth: 1,
		borderColor: ColorPalletes.white
	},
	customerDetails: {
		padding: 3,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		fontSize: 12,
		fontWeight: 'bold',
		color: ColorPalletes.white
	},
	customerId: {
		paddingTop: 20
	},
	customerName: {
		fontSize: 15,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		backgroundColor: ColorPalletes.bellBlue,
		padding: 25,
		marginTop: 10
	},
	headerText: {
		width: '90%',
		textAlign: 'left',
		alignItems: 'flex-end',
		fontSize: 15,
		fontWeight: '500',
		color: ColorPalletes.white
	},
	backIcon: {
		width: '10%',
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	content: {
		padding: 20,
		backgroundColor: ColorPalletes.white,
		borderColor: ColorPalletes.bellBlue,
		borderTopWidth: 1.5,
		borderLeftWidth: 1.5,
		borderRightWidth: 1.5,
		borderBottomWidth: 1.5,
	},
	active: {
		backgroundColor: ColorPalletes.bellBlue,
	},
	inactive: {
		backgroundColor: ColorPalletes.bellBlue,
	},
});