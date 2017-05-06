
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

export default class Confirmation extends Component{

    constructor(props){
        super(props)
        this.state={
            stepOne:{},
            stepTwo:{},
            stepThree:{},    
            alldata:{}                 
        }
    }
    
    componentWillMount(){
		let allData = this.props.getState();
        let combinedData={}
        for(var i in allData){
            let stepdate = allData[i];
            if(i == 0){
                this.setState({stepOne: stepdate})               
            }
            if(i == 1){
                this.setState({stepTwo: stepdate})
            }
            if(i == 2){
                this.setState({stepThree: stepdate})
            }
             for(var j in stepdate){
                 if(j != 'inputValidStatus' && j != 'allValidFeilds')
                    combinedData[j] = stepdate[j]
             }
        }
        this.setState({alldata: combinedData})   
       
	}

    _submitData(){   
        //this.props.onFinish()
        Actions.signin()
    }

    _previousPreprocess(){
        // Go to previous step
        this.props.prevFn()
    }

    _renderConfirmPage(){
        var confirmPage = [];
        for(var i in this.state.alldata){
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
                { confirmPage }
            </View>
        )
    }

    render(){
        return(
                <View
                    style={styles.formContainer}>
                        <View style={styles.headerSection}>
                            <Text style={styles.formLegend}>Confirmation</Text>
                        </View>
                        { this.state.alldata && 
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
    confirmSection:{
        marginBottom:20,
        width:'100%',
        flexDirection:'row',
    },
    label:{
        width:'50%',
        alignSelf:'center',
        alignItems:'flex-start',
        paddingRight:15,
    },
    value:{
        width:'50%',
        alignSelf:'center',
        alignItems:'flex-start',        
        paddingLeft:15,
    },
    confirmText:{
         fontSize:13
    }
})