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
    View
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import MultiStep from '../../../libs/MultiStep';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Confirmation from './components/Confirmation';

/**
 * Define the steps of multistep wizard
 */
const steps = [
    { name: 'StepOne', indicator: '1', component: <StepOne /> },
    { name: 'StepTwo', indicator: '2', component: <StepTwo /> },
    { name: 'StepThree', indicator: '3', component: <StepThree /> },
    { name: 'Confirmation', indicator: '4', component: <Confirmation /> },
];

/**
 * Create Register page widget
 */
export default class RegisterWidget extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
    constructor(props) {
        super(props)
        this.state = {}
    }

    /**
     * Finish wizard event
     * @param {*} wizardState 
     */
    _finish(wizardState) {
        //code to be executed when wizard is finished
        alert('finish')
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <View style={styles.container}>
                <MultiStep
                    steps={steps}
                    onFinish={() => this._finish()}
                    allowJump={true}
                    wizardHeader='Register your profile.' />
            </View>
        )
    }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});


