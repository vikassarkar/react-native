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
    Text,
    View,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Grid, Col, Row } from 'react-native-elements';

/**
 * Import widget required image
 */
import sliderFourImage from '../../../assets/images/carouselSlider/slider4.jpg';

/**
 * define widget constants
 */
const { width, height } = Dimensions.get('window');

/**
 * Create slider four widget
 */
export default class SliderFour extends Component {
    /**
    * Initillize constructor
    * @param {*} props
    */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
    render() {
        return (
            <Grid>
                <Row size={100}>
                    <Col size={40}>
                        <View style={styles.sliderContent}>
                            <Text style={styles.header1}>
                                Get the Samsung Galaxy S8 | S8+  on Canada’s best national network.
                        </Text>
                            <Text style={styles.paragraph}>
                                Plus, receive a minimum $150 off when you trade in an eligible device and activate on select 2-year plans with data.
                        </Text>
                        </View>
                    </Col>
                    <Col size={60}>
                        <Image style={styles.imageStyle} source={sliderFourImage} />
                    </Col>

                </Row>
            </Grid>
        );
    }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
    imageStyle: {
        height: height / 3.4,
        width: '100%',
        alignContent: 'stretch',
    },
    sliderContent: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 3.2,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 5,

    },
    header1: {
        fontSize: 16,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 11,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
});