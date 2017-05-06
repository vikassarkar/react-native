
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { 
	Actions, 
	ActionConst 
} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ValidationInputSideLabels from '../../../../libs/ValidationInputSideLabels'

export default class StepOne extends Component{

    constructor(props){
        super(props)
        this.state={
            nameInput:'',
            emailInput:'',
            inputValidStatus:{
                nameInput:true, //not a required feild
                emailInput:false,//required feild
            },
            allValidFeilds: false
        }
    }
    	
    componentDidMount(){
		this.props.getState();
        //if value exist set all states
	}

    _inputChanged(key, val, isValidInput){
        this.state[key]=val; //setState not saving dynamically 
        this.state.inputValidStatus[key]=isValidInput; 
        this._validateForm();
	}

	_inputFocused(key, val, isValidInput){}

	_inputBlured(key, val, isValidInput) {}

    _nextPreprocess(){   

        // Save step state for use in other steps of the wizard
        this.props.saveState(0, this.state)
        // Go to next step
        this.props.nextFn()

        //get savedstepdata
        // this.props.getState()
    }

    _validateForm(){
        let isValid = true;
        for(var i in this.state.inputValidStatus){
            if(!this.state.inputValidStatus[i])
                isValid = false
        }
        this.setState({
            allValidFeilds : isValid
        })
    }

    render(){
        return(
                <View
                    style={styles.formContainer}>
                        <View style={styles.headerSection}>
                            <FontAwesome
                                name="angle-left"
                                size={30}
                                color="#00549A"
                                style={styles.backIcon}
                                onPress={() => Actions.signin()}/>
                            <Text style={styles.formLegend}>Step One</Text>
                        </View>
                        <View style={styles.signupForm}>
                            <ValidationInputSideLabels
                                inputChanged={(key, val, isValidInput) => this._inputChanged(key, val, isValidInput)}
                                inputFocused={(key, val, isValidInput) => this._inputFocused(key, val, isValidInput)}
                                inputBlured={(key, val, isValidInput) => this._inputBlured(key, val, isValidInput)}
                                inputLable="Name"
                                inputStateKey="nameInput"
                                placeholder="your name"
                                value={this.state.nameInput}
                                maxLength = {40}
                                placeholderTextColor="#D3D3D3"
                                underlineColorAndroid="transparent"
                                autoCorrect={false}
                                returnKeyLabel="next"
                                validations={['alphaOnly']}/>

                            <ValidationInputSideLabels
                                inputChanged={(key, val, isValidInput) => this._inputChanged(key, val, isValidInput)}
                                inputFocused={(key, val, isValidInput) => this._inputFocused(key, val, isValidInput)}
                                inputBlured={(key, val, isValidInput) => this._inputBlured(key, val, isValidInput)}
                                inputLable="Email"
                                inputStateKey="emailInput"
                                placeholder="your email"
                                value={this.state.emailInput}
                                maxLength = {40}
                                placeholderTextColor="#D3D3D3"
                                underlineColorAndroid="transparent"
                                autoCorrect={false}
                                returnKeyLabel="next"
                                validations={['required', 'email']}/>
                                
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity 
                                style={[styles.stepNext, {backgroundColor: this.state.allValidFeilds ? '#00549A': '#ccc'}]} 
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
}

const styles = StyleSheet.create({
    formContainer:{
        width:'100%',
        padding:20,
    },
    headerSection:{
         width:'100%',
         flexDirection: 'row',
    },
    backIcon:{
        width:'10%',
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    formLegend:{
        width:'90%',
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'center',
        color: '#00549A',
        fontSize:20,
        marginBottom:20,
    },
    buttonsContainer:{
        width:'100%',
       flexDirection: 'row-reverse',
        alignItems:'center',
        alignSelf:'center',
    },
    stepNext:{
        backgroundColor:'#00549A',
        width:'45%',
        padding:15,
        alignItems:'flex-end',
    },
    stepText:{
        color:'#fff',
        alignSelf:'center',
        fontSize:15
    },
    signupForm:{
        marginBottom:20
    }
})