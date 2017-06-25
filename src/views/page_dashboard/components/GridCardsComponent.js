import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions, StyleSheet, ScrollView} from 'react-native';


import { Actions, ActionConst } from 'react-native-router-flux';
import {Grid, Col, Row} from 'react-native-elements';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

import RouteActions from '../../routers/RouteActions'
import componentsList from '../../../resourcesApi/DashboardListData';

const {width, height} = Dimensions.get('window');

export default class GridCardsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};  
  }

  _viewComponent (obj){
    if(obj.action){
      RouteActions.route(obj.action, Actions);
    }else{
      alert("!!!!!!! "+obj.name+" page Coming Soon !!!!!!!")
    }
  }

  render() {
    return (
      <View style={styles.cardsContainer}>
        {componentsList.map((obj, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardCol} >
              <Image 
                source={obj.source}
                indicator={Progress.Pie}
                indicatorProps={{
                size: 80,
                borderWidth: 0,
                color: '#00549A',
                unfilledColor: 'rgba(200, 200, 200, 0.2)'}}
                style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardHeader}>{obj.name}</Text>
                <TouchableOpacity 
                  style={[styles.cardButton, {backgroundColor: obj.buttonColor}]}
                  onPress={() => this._viewComponent(obj)}>
                  <Text>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardsContainer: {
    width: '100%',
    height: '100%',
    marginTop:20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    width: '50%',
    height: width/2 +20,
    padding: 10
  },
  cardCol:{    
    width: '100%',
    borderColor:'#ccc',
    borderWidth:1,
  },
  cardImage:{
    height:'50%',
    width:'100%',
  },
  cardContent: {
    height:'50%',
    width: '100%',
    alignItems: 'center',
    paddingLeft:5,
    paddingRight:5,
  },
  cardHeader:{
    fontSize:16,
    padding:10,
  },
  cardButton:{
    padding:10,
    marginLeft:10,
    marginRight:10,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',    
    position:'absolute',
    bottom:5
  }
})