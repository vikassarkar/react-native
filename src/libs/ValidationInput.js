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
  TextInput, 
  Animated
} from 'react-native';
import Rules from './Rules'

export default class ValidationInput extends Component{

    constructor(props){
        super(props)
        this.state={
			inputDirty:false,
			isValidInput:true,
			invalidMessage:'',
			inputStateKey : this.props.inputStateInitialValue || '' ,
			inputLabel:false,
            inputLabelAnimate: new Animated.Value(15), // inits to zero
        }
    }

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

    _inputChanged(key, val){
		this.setState({inputStateKey: val, inputDirty: true});
		//validation**************************************
		let validationValue = this._validateInputFeild(val);
		this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		if(this.props.inputChanged){
			this.props.inputChanged(key, val, validationValue.test)
		}
	}

	_inputBlured(key, val) {	
			let self = this;			
			Animated.timing( this.state.inputLabelAnimate, {
				toValue: 15,
				duration: 300, 
			}).start(this.setState({inputLabelAnimate: new Animated.Value(15)}));
			setTimeout(function(){
					self.setState({inputLabel: false})
			},300)
			let validationValue = this._validateInputFeild(val);
			this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		
			if(this.props.inputBlured){
				this.props.inputBlured(key, val, validationValue.test)
			}
	}
	
	_inputFocused(key, val){
			this.setState({	inputLabel: true})
            Animated.timing( this.state.inputLabelAnimate, {
                toValue: 0,
                duration: 300, 
            }).start()	
			if(this.props.inputFocused)
				this.props.inputFocused(key, val, this.state.isValidInput)
	}

	_renderAnimateLabel(){
			return (
					<Animated.View 
						style={{
							top: this.state.inputLabelAnimate
						}}>
						<Text style={[styles.labelInputs, {
							color:this.state.isValidInput? '#00549A': 'red'
						}]}>{this.props.inputLable}</Text>
					</Animated.View>
				);
	}

	_renderErrorText(){
		return (
					<Text style={styles.errorText}>{this.state.invalidMessage}</Text>
				);
	}

	_onSubmitValidateInputs(){
		this.setState({inputDirty: true});
		let validationValue = this._validateInputFeild(this.state.inputStateKey);
		this.setState({	isValidInput: validationValue.test, invalidMessage : validationValue.test ? '' : validationValue.message})
		if(this.props.inputChanged){
			this.props.inputChanged(this.props.inputStateKey, this.state.inputStateKey, this.state.isValidInput)
		}
	}

	componentDidMount(){
		console.log('hi')
	}

    render(){
        return(
                <View style={styles.formInput}>
					{ this.state.inputLabel && 
						this._renderAnimateLabel()
					}
					<TextInput 
						onChangeText={(val) => this._inputChanged(this.props.inputStateKey, val)}
						onFocus={(val) => this._inputFocused(this.props.inputStateKey, this.state.inputStateKey)}
						onBlur={(val) => this._inputBlured(this.props.inputStateKey, this.state.inputStateKey)}
						inputLable={this.props.inputLable || ''}
						inputStateKey={this.props.inputStateKey || 'inputStateKey'}
						placeholder={this.props.placeholder || ''}
						value={this.state.inputStateKey}
						maxLength = {this.props.maxLength || 180}
						placeholderTextColor={this.props.underlineColorAndroid || '#D3D3D3'}
						underlineColorAndroid={this.props.underlineColorAndroid || 'transparent'}
						style={[this.props.style ||  styles.textInput, {
							borderColor: this.state.isValidInput? '#00549A': 'red', 
							color:this.state.isValidInput? '#00549A': 'red'
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
        )
    }
}

const styles = StyleSheet.create({
	formInput:{
		width:'100%',
		paddingTop:5,
		paddingBottom:20,
		alignSelf: 'center',
	},
	textInput:{	
		width:'100%',	
		alignSelf: 'center',
		borderColor: '#00549A', 
		borderBottomWidth: 0.5,
		fontSize:16,
		color:'#00549A',
		paddingBottom: -3,
		paddingLeft:15
	},
	labelInputs:{
		color:'#00549A',
		fontSize:16,
		paddingLeft:14
	},
	errorText:{
		color:'red',
		fontSize:16,
		paddingLeft:14,
		width:'100%',
	}
});
