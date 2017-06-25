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
    TouchableOpacity
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Actions, ActionConst } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';
import ValidationInputSideLabels from '../../../../libs/ValidationInputSideLabels'

export default class StepTwo extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
    constructor(props) {
        super(props)
        this.state = {
            passwordInput: '',
            confirmPasswordInput: '',
            inputValidStatus: {
                passwordInput: '',
                confirmPasswordInput: '',
            },
            allValidFeilds: false
        }
    }

    /**
     * On input Changed
     * @param {*} key 
     * @param {*} val 
     * @param {*} isValidInput 
     */
    _inputChanged(key, val, isValidInput) {
        this.state[key] = val; //setState not saving dynamically 
        this.state.inputValidStatus[key] = isValidInput;
        this._validateForm();
    }

    /**
     * On input focused
     * @param {*} key 
     * @param {*} val 
     * @param {*} isValidInput 
     */
    _inputFocused(key, val, isValidInput) { }

    /**
     * On input blured
     * @param {*} key 
     * @param {*} val 
     * @param {*} isValidInput 
     */
    _inputBlured(key, val, isValidInput) { }

    /**
     * Move to next step
     */
    _nextPreprocess() {
        // Save step state for use in other steps of the wizard
        this.props.saveState(1, this.state)
        // Go to next step
        //this.props.nextFn()
        //get savedstepdata
        // this.props.getState()
        Actions.signin()
    }

    /**
     * validate form event
     */
    _validateForm() {
        let isValid = true;
        for (var i in this.state.inputValidStatus) {
            if (!this.state.inputValidStatus[i])
                isValid = false
        }
        this.setState({
            allValidFeilds: isValid
        })
    }

    /**
     * @REACT DEFAULT METHOD - called on widget render on screen is done
     */
    componentDidMount() {
        this.props.getState();
        //if value exist set all states
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <View
                style={styles.formContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.formLegend}>Step Two</Text>
                </View>
                <View style={styles.signupForm}>
                    <ValidationInputSideLabels
                        inputChanged={(key, val, isValidInput) => this._inputChanged(key, val, isValidInput)}
                        inputFocused={(key, val, isValidInput) => this._inputFocused(key, val, isValidInput)}
                        inputBlured={(key, val, isValidInput) => this._inputBlured(key, val, isValidInput)}
                        inputLable="Password"
                        inputStateKey="passwordInput"
                        placeholder="your password"
                        value={this.state.passwordInput}
                        maxLength={40}
                        placeholderTextColor={ColorPalletes.lightGrey}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        returnKeyLabel="next"
                        secureTextEntry={true}
                        validations={['required', 'password']} />

                    <ValidationInputSideLabels
                        inputChanged={(key, val, isValidInput) => this._inputChanged(key, val, isValidInput)}
                        inputFocused={(key, val, isValidInput) => this._inputFocused(key, val, isValidInput)}
                        inputBlured={(key, val, isValidInput) => this._inputBlured(key, val, isValidInput)}
                        inputLable="Confirm password"
                        inputStateKey="confirmPasswordInput"
                        placeholder="Reenter password"
                        value={this.state.confirmPasswordInput}
                        maxLength={40}
                        placeholderTextColor={ColorPalletes.lightGrey}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        returnKeyLabel="next"
                        secureTextEntry={true}
                        validations={['required', 'password']}
                        mapValue={[this.state.passwordInput]} />

                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={[styles.stepNext, { backgroundColor: this.state.allValidFeilds ? ColorPalletes.bellBlue : ColorPalletes.dustyGrey }]}
                        disabled={this.state.allValidFeilds ? false : true}
                        onPress={() => this._nextPreprocess()}>
                        <Text style={styles.stepText}>
                            Next
                                </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        padding: 20,
    },
    headerSection: {
        width: '100%',
        flexDirection: 'row',
    },
    formLegend: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: ColorPalletes.bellBlue,
        fontSize: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignSelf: 'center',
    },
    stepNext: {
        backgroundColor: ColorPalletes.bellBlue,
        width: '45%',
        padding: 15,
        alignItems: 'flex-end',
    },
    stepText: {
        color: ColorPalletes.white,
        alignSelf: 'center',
        fontSize: 15
    },
    signupForm: {
        marginBottom: 20
    }
})