/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import HomeData from '../../../mockstubs/HomeAccordionData';

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
const SELECTORS = [
        {
            title: 'First',
            value: 0,
        },
        {
            title: 'Third',
            value: 2,
        },
        {
            title: 'None',
            value: false,
        }
    ];

export default class AccordionWrapperWidget extends Component {
    constructor(){
        super();
        this.state = {
                activeSection: false,
                collapsed: true,
        };
    }

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    _setSection(section) {
        this.setState({ activeSection: section });
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
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
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.content]} transition="backgroundColor">
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>                
                <View style={styles.selectors}>
                    <Text style={styles.selectTitle}>Select:</Text>
                    {SELECTORS.map(selector => (
                        <TouchableHighlight key={selector.title} onPress={this._setSection.bind(this, selector.value)}>
                            <View style={styles.selector}>
                                <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                                    {selector.title}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>

                <Accordion
                    activeSection={this.state.activeSection}
                    sections={CONTENT}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    duration={400}
                    onChange={this._setSection.bind(this)}
                />

                <TouchableHighlight onPress={this._toggleExpanded}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Single Collapsible</Text>
                    </View>
                </TouchableHighlight>

                <Collapsible collapsed={this.state.collapsed} align="center">
                    <View style={styles.content}>
                        <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
                    </View>
                </Collapsible>
                
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop:100
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#00549A',
        padding: 25,
        borderColor: '#D3D3D3', 
		borderBottomWidth: 1.5,
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
    },
    active: {
        backgroundColor: '#00549A',
    },
    inactive: {
        backgroundColor: '#00549B',
    },
    selectors: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
        color:'#00549B'
    },
    selectTitle: {
        fontSize: 15,
        fontWeight: '500',
        padding: 10,
    },
});
