/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import {Grid, Col, Row} from 'react-native-elements';

const { width, height } = Dimensions.get('window');
import sliderOneImage from '../../../assets/images/carouselSlider/slider1.jpg';

export default class SliderOne extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
         <Grid>
             <Row size={100}>
                 <Col size={60}>
                    <Image style={styles.imageStyle} source={sliderOneImage}/>
                 </Col>
                 <Col size={40}>
                    <View style={styles.sliderContent}>
                        <Text style={styles.header1}>
                            Get an amazing phone on an amazing network.
                        </Text>
                        <Text style={styles.paragraph}>                                
                            There’s never been a better time to get on Canada’s fastest ranked and largest network.
                        </Text>
                    </View>
                 </Col>
             </Row>
        </Grid>
    );
  }
}

const styles = StyleSheet.create({
    
    imageStyle:{
        height:height/3.4,
        width:'100%',
	    alignContent: 'stretch',
    },
    sliderContent:{
        alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
        height:height/3.2,
        width:'100%',
        paddingLeft: 5,
        paddingRight: 10,

    },
    header1:{
        fontSize:16,
        alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
        textAlign:'center',
    },
    paragraph:{
        fontSize:11,
        alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
        textAlign:'center',
    }
})