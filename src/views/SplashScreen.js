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
    Image,
    Animated
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Grid, Col, Row } from 'react-native-elements';

/**
 * Import widget required files
 */
import ColorPalletes from '../assets/styles/style.color.palletes';
import logoImg from '../assets/images/bell_white.png';
import loadingImg from '../assets/images/heartbeat.gif';

/**
 * Create spash screen widget
 */
export default class SplashScreen extends Component {

    /**
     * Initillize constructor
     * @param {*} props - property attribute variables assigned in element
     */
    constructor(props) {
        super(props)
        this.state = {}
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <Grid style={styles.splashContainer}>
                <Row size={55}>
                    <View style={styles.logoContainer} >
                        <Image style={styles.bellLogo} source={logoImg} />
                    </View>
                </Row>
                <Row size={40}>
                    <View style={styles.loaderContainer} >
                        <Image style={styles.loadingGif} source={loadingImg} />
                        {/*<Text style={styles.loadingGif}>Loading.....</Text> */}
                    </View>
                </Row>
                <Row size={5}>
                    <Text style={styles.copyrightText}> © Copyrigt Bell networks 2017.</Text>
                </Row>
            </Grid>
        )
    }
};

/**
 * Create  widget styles
 */
const styles = StyleSheet.create({
    splashContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: ColorPalletes.bellBlue
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bellLogo: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: 260,
        height: 150,
    },
    loaderContainer: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loadingGif: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 70,
        width: 260
    },
    copyrightText: {
        textAlign: 'center',
        color: ColorPalletes.white,
        width: '100%',
        fontSize: 12
    }
});
