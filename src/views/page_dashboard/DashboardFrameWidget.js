import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

import GridCardsComponent from './components/GridCardsComponent'
import SliderOne from './components/SliderOne'
import SliderTwo from './components/SliderTwo'
import SliderThree from './components/SliderThree'
import SliderFour from './components/SliderFour'

const { width, height } = Dimensions.get('window');

export default class DashboardFrameWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {      
      pageloader: true,
      dashboardVisible:false
    };
  }

  componentDidMount(){
    
  }

  render() {
    return (
        <ScrollView style={{marginTop:60}}>
                <Carousel
                  delay={3000}
                  style={styles.carauselSize}
                  autoplay
                  bullets
                  onAnimateNextPage={(p) => console.log(p)}>
                  <View style={[styles.slideSize,  styles.sliderStyle]}>
                    <SliderOne/>
                  </View>
                  <View style={[ styles.slideSize, styles.sliderStyle]}> 
                    <SliderTwo/>
                  </View>
                  <View style={[ styles.slideSize, styles.sliderStyle]}> 
                    <SliderThree/>
                  </View>
                  <View style={[ styles.slideSize, styles.sliderStyle]}> 
                    <SliderFour/>
                  </View>
                </Carousel>
                <GridCardsComponent/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sliderStyle:{ 
    backgroundColor: '#E6E6E0', 
    padding:10 
  },
  carauselSize: { 
    width: width, 
    height: height/2.7
  },
  slideSize:{
    width: width, 
    height: height
  },
})