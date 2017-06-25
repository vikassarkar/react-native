/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Actions, ActionConst } from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-elements';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../assets/styles/style.color.palletes';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';
import Wallpaper from './components/Wallpaper';
import LoginLinkSection from './components/LoginLinkSection';

/**
 * Create Login page widget
 */
export default class LoginWidget extends Component {

	/**
	 * Initillize constructor
     * @param {*} props
	 */
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: ''
        }
    }

    /**
     * on login button success event
     */
    _onLoginEvent = (component) => {
        this.setState({
            isLoggedIn: component.state.isLoggedIn
        });
        this.props.onButtonEvent(this);
    }

    /**
     * @REACT DEFAULT METHOD - called on widget render on screen is done
     */
    componentDidMount() {
        this.setState({
            isLoggedIn: false
        });
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <Wallpaper>
                <Grid>
                    <Row size={25}>
                        <Logo />
                    </Row>
                    <Row size={60}>
                        <LoginForm onLoginEvent={(comp) => this._onLoginEvent(comp)} />
                    </Row>
                    {/*<Row size={30}>
                        <LoginButton onLoginEvent={(comp) => this._onLoginEvent(comp)} username={this.state.username} password={this.state.password}/>
                    </Row>*/}
                    <Row size={15}>
                        <LoginLinkSection onAuthRoute={this.props.onAuthRoute} />
                    </Row>
                    {/*<Row size={5}>
                        <Text style={styles.copyrightText}> © Copyrigt Bell networks 2017.</Text>
                    </Row>*/}
                </Grid>
            </Wallpaper>
        );
    }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
    copyrightText: {
        textAlign: 'center',
        color: ColorPalletes.dustyGrey,
        width: '100%',
        fontSize: 12
    }
});