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
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

/**
 * Import Redux Dependencies
 */
import { Provider } from 'react-redux';

/**
 * Import app required files
 */
import ColorPalletes from './src/assets/styles/style.color.palletes';
import AuthRouter from './src/views/routers/AuthRouter';
import AppMainView from './src/views/AppMainView';
import SplashScreen from './src/views/SplashScreen';
import { AuthAction } from './src/reduxconfig/actions/EmmitAuthActions';
import store from './src/reduxconfig/store/StoreConfiguration';

/**
 * Create Applications main frame widget 
 */
export default class Bellpoc extends Component {

    /**
     * Initillize constructor
     * @param {*} props - property attribute variables assigned in element
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            appMounted: true
        };
    }

    /**
     * touch/press/click function called when login success from loginButton widget
     * @param {*} component - widget refrence to get there state variables
     */
    _authGateway = (component) => {
        this.setState({
            isLoggedIn: component.state.isLoggedIn
        });
        store.dispatch(AuthAction(this.state));
    }

    /**
     * @REACT DEFAULT METHOD - called on widget render on screen is done
     */
    componentDidMount() {
        //StatusBar.setBarStyle('backgroundColor', ColorPalletes.bellBlue);
        var self = this;
        setTimeout(function () {
            self.setState({ appMounted: true });
        }, 3000);
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        if (this.state.appMounted) {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {this.state.isLoggedIn &&
                            <AppMainView
                                onButtonEvent={(comp) => this._authGateway(comp)}
                                state={this.state} />
                        }
                        {!this.state.isLoggedIn &&
                            <AuthRouter
                                onButtonEvent={(comp) => this._authGateway(comp)}
                                state={this.state} />
                        }
                    </View>
                </Provider>
            );
        } else {
            return (
                <SplashScreen />
            );
        }
    }
}

/**
 * Create Applications main frame widget styles
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalletes.white
    }
});

/**
 * Register component to build apk
 */
AppRegistry.registerComponent('Bellpoc', () => Bellpoc);
