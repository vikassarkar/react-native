
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux';

import AuthRouter from './src/views/routers/AuthRouter';
import AppMainView from './src/views/AppMainView';
import SplashScreen from './src/views/SplashScreen';
import {AuthAction} from './src/redux_actions/AuthAction';
import store from './src/redux_store/StoreConfiguration';


export default class Bellpoc extends Component {

    constructor(props) {
        super(props)

        this.state  = {
            isLoggedIn: false,
            appMounted:false
        }
    }   
    _authGateway= (component) => {
        this.setState({ 
            isLoggedIn : component.state.isLoggedIn
        });  
        store.dispatch(AuthAction(this.state));
    }

    componentDidMount() {      
        //StatusBar.setBarStyle('backgroundColor','#00549A');
        var self = this;
        setTimeout(function() {
            self.setState({ appMounted : true});
       }, 3000);        
    }

    render() {
        if(this.state.appMounted){
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        { this.state.isLoggedIn &&          
                            <AppMainView 
                            onButtonEvent={(comp) => this._authGateway(comp)} 
                            state={this.state}/>
                        }             
                        { !this.state.isLoggedIn &&       
                            <AuthRouter 
                            onButtonEvent={(comp) => this._authGateway(comp)} 
                            state={this.state}/>
                        }
                    </View>
                </Provider>
            );
        }else{            
            return ( 
                    <SplashScreen/>
            );
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})

AppRegistry.registerComponent('Bellpoc', () => Bellpoc);
