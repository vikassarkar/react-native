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
import sliderFourImage from '../../../assets/images/carouselSlider/slider4.jpg';

export default class SliderFour extends Component {

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
                            Get the Samsung Galaxy S8 | S8+  on Canada’s best national network.
                        </Text>
                        <Text style={styles.paragraph}>                            
                                Plus, receive a minimum $150 off when you trade in an eligible device and activate on select 2-year plans with data.
                        </Text>
                    </View>
                 </Col>
                 <Col size={60}>
                    <Image style={styles.imageStyle} source={sliderFourImage}/>
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