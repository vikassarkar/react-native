import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MultiStep from '../../../libs/MultiStep'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import Confirmation from './components/Confirmation'

/* Define the steps of multistep wizard */

const steps = [
              {name: 'StepOne', indicator: '1', component: <StepOne/>},
              {name: 'StepTwo', indicator: '2', component: <StepTwo/>},
            {name: 'StepThree', indicator: '3', component: <StepThree/>},
            {name: 'Confirmation', indicator: '4', component: <Confirmation/>},
            ];

export default class RegisterWidget extends Component {
	
    constructor(props) {
        super(props)
        this.state  = { }
    }   

    _finish(wizardState){
        //code to be executed when wizard is finished
        alert('finish')
     }

    render(){
        return(
            <View style={styles.container}>
                <MultiStep 
                steps={steps} 
                onFinish={() => this._finish()}
                allowJump={true}
                wizardHeader='Register your profile.'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    }
})


