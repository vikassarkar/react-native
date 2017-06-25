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
  ScrollView
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import Carousel from 'react-native-looped-carousel';

/**
 * Import widget required files
 */
import ColorPalletes from '../../assets/styles/style.color.palletes';
import store from '../../../src/reduxconfig/store/StoreConfiguration';
import GridCardsComponent from './components/GridCardsComponent'
import SliderOne from './components/SliderOne'
import SliderTwo from './components/SliderTwo'
import SliderThree from './components/SliderThree'
import SliderFour from './components/SliderFour'

/**
 * define widget constants
 */
const { width, height } = Dimensions.get('window');

/**
 * Create dashboard page widget
 */
export default class DashboardFrameWidget extends Component {

	/**
	 * Initillize constructor
   * @param {*} props
	 */
  constructor(props) {
    super(props);
    this.state = {
      pageloader: true,
      dashboardVisible: false,
      userName: store.getState().AuthReducer.userDetails.userName || '0'
    };
  }
  /**
   * event triggered function for each slide
   * @param {*} p 
   */
  _carouselSlide(p) { }

  /**
   * @REACT DEFAULT METHOD - called on widget render on screen is done
   */
  componentDidMount() { }

  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (
      <ScrollView style={{ marginTop: 60 }}>
        <Carousel
          delay={3000}
          style={styles.carauselSize}
          autoplay
          bullets
          onAnimateNextPage={(p) => this._carouselSlide(p)}>
          <View style={[styles.slideSize, styles.sliderStyle]}>
            <SliderOne />
          </View>
          <View style={[styles.slideSize, styles.sliderStyle]}>
            <SliderTwo />
          </View>
          <View style={[styles.slideSize, styles.sliderStyle]}>
            <SliderThree />
          </View>
          <View style={[styles.slideSize, styles.sliderStyle]}>
            <SliderFour />
          </View>
        </Carousel>
        {this.state.userName != '0' &&
          <Text style={styles.userText}>Hey <Text>{this.state.userName}</Text> Welcome to this app.</Text>
        }
        <GridCardsComponent />
      </ScrollView>
    );
  }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
  sliderStyle: {
    backgroundColor: ColorPalletes.cream,
    padding: 10
  },
  carauselSize: {
    width: width,
    height: height / 2.7
  },
  slideSize: {
    width: width,
    height: height
  },
  userText: {
    alignSelf: 'center',
    fontSize: 15,
    color: ColorPalletes.bellBlue,
    paddingTop: 20
  }
});