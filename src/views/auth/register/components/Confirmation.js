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

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';

/**
 * Create step confirmation
 */
export default class Confirmation extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
    constructor(props) {
        super(props)
        this.state = {
            stepOne: {},
            stepTwo: {},
            stepThree: {},
            alldata: {}
        }
    }

    /**
     * on submit confirm wizard
     */
    _submitData() {
        //this.props.onFinish()
        Actions.signin()
    }

    /**
     * jump to back
     */
    _previousPreprocess() {
        // Go to previous step
        this.props.prevFn()
    }

    /**
     * Confirm page HTML
     */
    _renderConfirmPage() {
        var confirmPage = [];
        for (var i in this.state.alldata) {
            confirmPage.push(
                <View style={styles.confirmSection} key={i}>
                    <View style={styles.label}>
                        <Text style={styles.confirmText}>{i}</Text>
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.confirmText}>{this.state.alldata[i]}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View>
                {confirmPage}
            </View>
        )
    }

    /**
     * @REACT DEFAULT METHOD - called on widget render on screen is done
     */
    componentWillMount() {
        let allData = this.props.getState();
        let combinedData = {}
        for (var i in allData) {
            let stepdate = allData[i];
            if (i == 0) {
                this.setState({ stepOne: stepdate })
            }
            if (i == 1) {
                this.setState({ stepTwo: stepdate })
            }
            if (i == 2) {
                this.setState({ stepThree: stepdate })
            }
            for (var j in stepdate) {
                if (j != 'inputValidStatus' && j != 'allValidFeilds')
                    combinedData[j] = stepdate[j]
            }
        }
        this.setState({ alldata: combinedData })

    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <View
                style={styles.formContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.formLegend}>Confirmation</Text>
                </View>
                {this.state.alldata &&
                    this._renderConfirmPage()
                }
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.stepNext}
                        onPress={() => this._submitData()}>
                        <Text style={styles.stepText}>
                            Submit
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
    confirmSection: {
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
    },
    label: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingRight: 15,
    },
    value: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    confirmText: {
        fontSize: 13
    }
})