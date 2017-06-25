/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Text
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import profileImg from '../../assets/images/profile.jpg';

const SIZE = 40;
const CONTENT =[
        {
            title: 'First Collapsible',
            content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ',
        },
        {
            title: 'Second Collapsible',
            content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ',
        },
        {
            title: 'Third Collapsible',
            content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ',
        },
        {
            title: 'Fourth Collapsible',
            content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ',
        },
        {
            title: 'Fifth Collapsible',
            content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ',
        }
    ];

export default class ProfileFrameWidget extends Component {
	constructor() {
		super();
		this.state = {
                activeSection: false
        };
	}

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

	_renderContent(section, i, isActive) {
        return (
            <View style={[styles.content]}>
                <Text>>{section.content}</Text>
            </View>
        );
    }

	_setSection(section) {
        this.setState({ activeSection: section });
    }
	
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
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#FFFFFF',
        marginTop:60
    },
	profileImageHolder:{
		backgroundColor: '#00549A',
        justifyContent: 'center',
        padding: 10,
        width:'100%',
        height:250,
        position:'absolute',
        zIndex:9,
        top:0
	},
	scrollView:{
         width:'96%',
         height:'100%',
         marginTop:260,
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
    	borderColor: '#fff'
	},
	customerDetails:{
		padding:3,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		fontSize:12,
		fontWeight:'bold',
		color:'#FFFFFF'
	},
	customerId:{
		paddingTop:20
	},
	customerName:{
		fontSize:15,
	},
	header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#00549A',
        padding: 25,
		marginTop:10
    },
    headerText: {
        width: '90%',
        textAlign: 'left',        
        alignItems: 'flex-end',
        fontSize: 15,
        fontWeight: '500',
        color:"#FFFFFF"
    },
    backIcon: {
        width: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#75B8BE', 
		borderTopWidth: 1.5,
		borderLeftWidth: 1.5,
		borderRightWidth: 1.5,
		borderBottomWidth: 1.5,
    },
    active: {
        backgroundColor: '#00549B',
    },
    inactive: {
        backgroundColor: '#00549A',
    },
});