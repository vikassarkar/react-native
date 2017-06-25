/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
    Alert,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default class MultiStep extends Component {
    
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.saveStepState = this.saveStepState.bind(this)
        this.getStepState = this.getStepState.bind(this)
        this.finishWizard = this.finishWizard.bind(this)
         this.state = {
            curState:0,
            allowJump:this.props.allowJump || false,
            steplist:[],
            childState:[]
           };       
        for(var i =0; i< this.props.steps.length;i++){
            this.state.steplist[i] = React.cloneElement(this.props.steps[i].component,{
                nextFn:this.next,
                prevFn:this.previous,
                saveState:this.saveStepState,
                getState:this.getStepState
            })
        }

    }

    next(){
        if((this.state.curState +1) < this.props.steps.length ){
            this.setState({curState:this.state.curState +1})
        }
        if((this.state.curState +1) == this.props.steps.length){
            this.finishWizard()
        }
    }

    previous(){
        if((this.state.curState - 1) >= 0 ){
            this.setState({curState:this.state.curState - 1})
        }
    }

    saveStepState(stepNum,stateData){
        
        var chdata = this.state.childState
        chdata[stepNum] = stateData
        this.setState({childState:chdata})
    }
    
    getStepState(){
        return this.state.childState
    }
    
    finishWizard(){
        this.props.onFinish(this.getStepState())
    }

    gotoStep(stepData, stepNumber){
        if(this.state.allowJump){
             //alert(stepNumber)
            this.setState({curState: stepNumber})
            if((stepNumber+1) == this.state.steplist.length){
                this.finishWizard()
            }
            //this.props.jumpStep(this.getStepState(), stepData)
        }       
    }

    render(){
        const stepsWidth = (DEVICE_WIDTH-20)/this.state.steplist.length ;
        const totalsteps = this.state.steplist.length;
        return (
                <View>                   
                    <View style={styles.wizard}>   
                            
                            <View Style={styles.wizardHeader}><Text style={styles.headerText}>{this.props.wizardHeader}</Text></View>
                            <View style={styles.wizardDraw}>                     
                                    { this.props.steps.map((l, i) => (
                                        <View 
                                            key={i}
                                            style={[styles.wizardSteps, {width: stepsWidth}]}>
                                            {i != 0 &&
                                                <View style={[styles.stepLeft, { backgroundColor: i < this.state.curState? 'green': '#fff'}]}></View>
                                            }
                                            {i == 0 &&
                                                <View style={[styles.transparentLeft]}></View>
                                            }

                                            {this.state.allowJump &&
                                                <TouchableOpacity  
                                                    style={[styles.stepView, { backgroundColor: i < this.state.curState? 'green': '#fff'}]}  
                                                    title={l.indicator}
                                                    onPress={this.gotoStep.bind(this, l, i)}>
                                                    <Text style={{color: i <  this.state.curState? '#fff':  '#00549A'}}>{l.indicator}</Text>
                                                </TouchableOpacity>
                                            }
                                            {!this.state.allowJump &&
                                                <View  
                                                    style={[styles.stepView, { backgroundColor: i < this.state.curState? 'green': '#fff'}]}  
                                                    title={l.indicator}>
                                                    <Text style={{color: i <  this.state.curState? '#fff':  '#00549A'}}>{l.indicator}</Text>
                                                </View>
                                            }
                                            {i+1 != totalsteps &&
                                                <View  style={[styles.stepRight, { backgroundColor: i+2 <= this.state.curState? 'green': '#fff'}]}></View>
                                            }
                                            {i+1 == totalsteps &&
                                                <View style={[styles.transparentRight]}></View>
                                            }
                                        </View>
                                    ))}
                                </View>
                                <View style={styles.wizardContent}>
                                    { this.props.steps.map((l, i) => (
                                        <View 
                                            key={l.name}
                                            style={[styles.wizardTitle, {width: stepsWidth}]}>
                                            <Text style={{color:'#fff'}}>{l.name}</Text>
                                        </View>
                                    ))}
                                </View>
                    </View>
                     <ScrollView>
                         <View style={styles.scrollView}>
                        {this.state.steplist[this.state.curState]}
                        </View>
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView:{
         width:'100%',
         height:'100%',
         marginTop:180,
    },
    wizard:{ 
		backgroundColor: '#00549A',
        justifyContent: 'center',
        padding: 10,
        width:'100%',
        height:160,
        position:'absolute',
        zIndex:9,
        top:0
    },
    wizardHeader:{
        justifyContent: 'center',
        alignSelf:'center',
        width:'100%',
        height:'20%'        
    },
    headerText:{
        color:'#fff',
        alignSelf:'center',
        fontSize:20
    },
    wizardDraw:{
        justifyContent: 'center',
         flexDirection: 'row',
        width:'100%',
        height:'45%'
    },
     wizardSteps:{ 
        height:'100%',
        flexDirection: 'row',
		alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
    },
    stepView:{
        height:40,
        width:40,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius:20   ,    
        position:'absolute',
        zIndex:9
    },
     stepRight:{
         width:'50%',
         height:5,
         alignItems: 'flex-end',
    },
    stepLeft:{
         width:'50%',
         height:5,        
         alignItems: 'flex-start',
    },
    transparentLeft:{
         width:'50%',
         height:5,
         backgroundColor:'transparent',
        alignItems: 'flex-start',
    },
    transparentRight:{
         width:'50%',
         height:5,
         backgroundColor:'transparent',
          alignItems: 'flex-end',
    },
    wizardContent:{
        justifyContent: 'center',
         flexDirection: 'row',
        width:'100%',
        height:'35%'
    },
    wizardTitle:{
        flexDirection: 'row',
		alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
    },
})