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
  TextInput, 
  Animated
} from 'react-native';


/**
 * Import app required files
 */
import Rules from './Rules';
import ColorPalletes from '../assets/styles/style.color.palletes';

/**
 * Create ValidationInputSideLabels widget
 */
export default class ValidationInputSideLabels extends Component{

    /**
     * Initillize constructor
     * @param {*} props - property attribute variables assigned in element
     */
    constructor(props){
        super(props)
        this.state={
			inputDirty:false,
			isValidInput:true,
			invalidMessage:'',
			inputStateKey : this.props.inputStateInitialValue || '' ,
        }
    }
	
	/**
	 * map input feild with regx
	 * @param {*} val 
	 */
	_validateInputFeild(val){
		let validationRules = this.props.validations;
		let valuesMapped = true;
		let valMap;
		if(this.props.mapValue){
			valMap = Rules.mapInputVal(val, this.props.mapValue)
			valuesMapped = valMap.test;
		}
		if(valuesMapped){
			return  Rules.validateFields(validationRules, val)
		}else{
			return valMap;
		}
	}

	/**
	 * change event functionality on input box
	 * @param {*} key 
	 * @param {*} val 
	 */
    _inputChanged(key, val){
		this.setState({inputStateKey: val, inputDirty: true});
		let validationValue = this._validateInputFeild(val);
		this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		if(this.props.inputChanged){
			this.props.inputChanged(key, val, validationValue.test)
		}
	}

	/**
	 * blur event functionality on input box
	 * @param {*} key 
	 * @param {*} val 
	 */
	_inputBlured(key, val) {	
			let self = this;					
			let validationValue = this._validateInputFeild(val);
			this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		
			if(this.props.inputBlured){
				this.props.inputBlured(key, val, validationValue.test)
			}
	}
	
	/**
	 * focus event functionality on input box
	 * @param {*} key 
	 * @param {*} val 
	 */
	_inputFocused(key, val){
			if(this.props.inputFocused)
				this.props.inputFocused(key, val, this.state.isValidInput)
	}

	/**
	 * Animation for lable on top of input boxes
	 */
	_renderAnimateLabel(){
			return (
					<Text style={[styles.labelInputs, {
							color:this.state.isValidInput? ColorPalletes.bellBlue: ColorPalletes.bloodRed
						}]}>{this.props.inputLable}</Text>
				);
	}

	/**
	 * rendering error text messages
	 */
	_renderErrorText(){
		return (
					<Text style={styles.errorText}>{this.state.invalidMessage}</Text>
				);
	}

	/**
	 * validations of input boxes on submit
	 */
	_onSubmitValidateInputs(){
		this.setState({inputDirty: true});
		let validationValue = this._validateInputFeild(this.state.inputStateKey);
		this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		if(this.props.inputChanged){
			this.props.inputChanged(this.props.inputStateKey, this.state.inputStateKey, this.state.isValidInput)
		}
	}

    /**
     * @REACT DEFAULT METHOD - called on widget render on screen is done
     */
	componentDidMount(){
	}

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render(){
        return(
                <View style={styles.formInput}>
					{ this.props.inputLable && 
						this._renderAnimateLabel()
					}
					<View style={styles.rightSideView}>
					<TextInput 
						onChangeText={(val) => this._inputChanged(this.props.inputStateKey, val)}
						onFocus={(val) => this._inputFocused(this.props.inputStateKey, this.state.inputStateKey)}
						onBlur={(val) => this._inputBlured(this.props.inputStateKey, this.state.inputStateKey)}
						inputLable={this.props.inputLable || ''}
						inputStateKey={this.props.inputStateKey || 'inputStateKey'}
						placeholder={this.props.placeholder || ''}
						value={this.state.inputStateKey}
						maxLength = {this.props.maxLength || 180}
						placeholderTextColor={this.props.underlineColorAndroid || ColorPalletes.lightGrey}
						underlineColorAndroid={this.props.underlineColorAndroid || 'transparent'}
						style={[this.props.style ||  styles.textInput, {
							borderColor: this.state.isValidInput? ColorPalletes.bellBlue : ColorPalletes.bloodRed, 
							color:this.state.isValidInput? ColorPalletes.bellBlue: ColorPalletes.bloodRed
						}]}
						autoCorrect={this.props.autoCorrect || false}
						returnKeyLabel={this.props.returnKeyLabel || 'next'}
						secureTextEntry={this.props.secureTextEntry || false}
						validations={this.props.validations}
						mapValue={this.props.mapValue}/>
					{ !this.state.isValidInput && 
						this._renderErrorText()
					}
					</View>
				</View>
        )
    }
};

/**
 * Create Applications styles
 */
const styles = StyleSheet.create({
	formInput:{
		width:'100%',
		paddingTop:5,
		paddingBottom:20,
		alignSelf: 'center',
		flexDirection:'row'
	},
	textInput:{	
		width:'100%',	
		alignSelf: 'center',
		borderColor: ColorPalletes.bellBlue, 
		borderBottomWidth: 0.5,
		fontSize:16,
		color:ColorPalletes.bellBlue,
		paddingLeft:5,
		paddingBottom:-1,
	},
	labelInputs:{
		width:'35%',
		color:ColorPalletes.bellBlue,
		fontSize:16,
		paddingLeft:5,
		paddingRight:5,
		paddingBottom:-3,
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'flex-start'
	},
	rightSideView:{
		width:'65%',	
		alignSelf: 'center',
		borderColor: ColorPalletes.bellBlue, 
		alignItems:'flex-end'
	},
	errorText:{
		color:ColorPalletes.bloodRed,
		fontSize:16,
		paddingLeft:5,
		paddingTop:5,
		width:'100%',
	}
});
