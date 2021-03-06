/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../assets/styles/style.color.palletes';

/**
 * Import widget required data
 */
import AccordData from '../../../mockstubs/AccordionData';

/**
 * define widget constants
 */
const CONTENT = AccordData.content;
const SELECTORS = AccordData.selector;

/**
 * Create Accordion widget
 */
export default class AccordionWrapperWidget extends Component {

	/**
	 * Initillize constructor
	 */
    constructor() {
        super();
        this.state = {
            activeSection: false,
            collapsed: true,
        };
    }

    /**
     * toggle event to click and collapse 
     */
    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    /**
     * set active accord props
     * @param {*} section 
     */
    _setSection(section) {
        this.setState({ activeSection: section });
    }

    /**
     * Render header acoord
     * @param {*} section 
     * @param {*} i 
     * @param {*} isActive 
     */
    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Text style={styles.headerText}>{section.title}</Text>
                {isActive &&
                    <FontAwesome
                        name="angle-down"
                        size={30}
                        color={ColorPalletes.white}
                        style={styles.backIcon} />
                }
                {!isActive &&
                    <FontAwesome
                        name="angle-up"
                        size={30}
                        color={ColorPalletes.white}
                        style={styles.backIcon} />
                }
            </Animatable.View>
        );
    }

    /**
     * Render content accord
     * @param {*} section 
     * @param {*} i 
     * @param {*} isActive 
     */
    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.content]} transition="backgroundColor">
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
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
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalletes.white,
        marginTop: 100
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: ColorPalletes.bellBlue,
        padding: 25,
        borderColor: ColorPalletes.lightGrey,
        borderBottomWidth: 1.5,
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
    },
    active: {
        backgroundColor: ColorPalletes.bellBlue,
    },
    inactive: {
        backgroundColor: ColorPalletes.bellBlue,
    },
    selectors: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: ColorPalletes.cream,
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
        color: ColorPalletes.navyBlue9
    },
    selectTitle: {
        fontSize: 15,
        fontWeight: '500',
        padding: 10,
    },
});
