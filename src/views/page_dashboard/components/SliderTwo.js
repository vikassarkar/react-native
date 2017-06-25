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
import sliderTwoImage from '../../../assets/images/carouselSlider/slider2.jpg';

export default class SliderTwo extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
         <Grid>
             <Row size={100}>
                  <Col size={40}>
                    <View style={styles.sliderContent}>
                        <Text style={styles.header1}>
                            SPRING SALE
                        </Text>
                        <Text style={styles.paragraph}>                            
                                Get guaranteed savings of $38/mo. off the regular price for 1 year. 
                        </Text>
                    </View>
                 </Col>
                 <Col size={60}>
                    <Image style={styles.imageStyle} source={sliderTwoImage}/>
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
        paddingLeft: 10,
        paddingRight: 5,

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