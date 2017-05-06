
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import AuthRouter from './src/views/auth/AuthRouter';
import AppMainView from './src/views/AppMainView';
import SplashScreen from './src/views/SplashScreen';


export default class Bellpoc extends Component {

    constructor(props) {
        super(props)

        this.state  = {
            isLoggedIn: false,
            username : '',
            appMounted:false
        }
    }   
    _authGateway= (component) => {
        this.setState({ 
            isLoggedIn : component.state.isLoggedIn , 
            username: component.state.username
        });        
    }

    componentDidMount() {      
        //StatusBar.setBarStyle('backgroundColor','#00549A');
        var self = this;
        setTimeout(function() {
            self.setState({ appMounted : true});
       }, 500);        
    }

    render() {
        if(this.state.appMounted){
            if(this.state.isLoggedIn){
                return (               
                        <AppMainView 
                        onButtonEvent={(comp) => this._authGateway(comp)} 
                        state={this.state}/>
                );
            }else{
                return (                         
                        <AuthRouter 
                        onButtonEvent={(comp) => this._authGateway(comp)} 
                        state={this.state}/>
                );
            }
        }else{            
            return ( 
                    <SplashScreen/>
            );
        }
    }
}

AppRegistry.registerComponent('Bellpoc', () => Bellpoc);
