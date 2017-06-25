/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
	Actions, 
	ActionConst
} from 'react-native-router-flux';
import {Grid, Col, Row} from 'react-native-elements';

import Logo from './components/Logo';
import LoginForm from './components/LoginForm';
import Wallpaper from './components/Wallpaper';
import LoginLinkSection from './components/LoginLinkSection';

export default class LoginWidget extends Component {
	constructor(props) {
        super(props)

        this.state  = {
            isLoggedIn: false,
            username : '',
            password:''
        }
    }   

    _onLoginEvent= (component) => {
        this.setState({ 
            isLoggedIn: component.state.isLoggedIn
        }); 
        this.props.onButtonEvent(this);              
    }

     componentDidMount() {      
         this.setState({ 
            isLoggedIn: false
        }); 
    }

	render() {
		return (
                <Wallpaper>
                        <Grid>
                            <Row size={25}>
                                <Logo />
                            </Row>
                            <Row size={60}>
                                <LoginForm onLoginEvent={(comp) => this._onLoginEvent(comp)}/>
                            </Row>                    
                            {/*<Row size={30}>
                                <LoginButton onLoginEvent={(comp) => this._onLoginEvent(comp)} username={this.state.username} password={this.state.password}/>
                            </Row>*/}
                            <Row size={15}>
                                <LoginLinkSection onAuthRoute = {this.props.onAuthRoute}/>
                            </Row>
                            {/*<Row size={5}>
                                <Text style={styles.copyrightText}> © Copyrigt Bell networks 2017.</Text>
                            </Row>*/}
                        </Grid>				
                    </Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
    copyrightText:{
        textAlign:'center',
        color:'#D3D3D3',
        width:'100%',
        fontSize:12
    }
})