/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { Actions, ActionConst } from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-elements';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../assets/styles/style.color.palletes';
import RouteActions from '../../routers/RouteActions'
import ComponentsList from '../../../mockstubs/DashboardListData';

/**
 * define widget constants
 */
const { width, height } = Dimensions.get('window');

/**
 * Create slider grids card widget
 */
export default class GridCardsComponent extends Component {
  /**
    * Initillize constructor
    * @param {*} props
    */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * View component event
   * @param {*} obj 
   */
  _viewComponent(obj) {
    if (obj.action) {
      RouteActions.route(obj.action, Actions);
    } else {
      alert("!!!!!!! " + obj.name + " page Coming Soon !!!!!!!")
    }
  }
  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (
      <View style={styles.cardsContainer}>
        {ComponentsList.map((obj, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardCol} >
              <Image
                source={obj.source}
                indicator={Progress.Pie}
                indicatorProps={{
                  size: 80,
                  borderWidth: 0,
                  color: ColorPalletes.dustyGrey,
                  unfilledColor: 'rgba(200, 200, 200, 0.2)'
                }}
                style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardHeader}>{obj.name}</Text>
                <TouchableOpacity
                  style={[styles.cardButton, { backgroundColor: obj.buttonColor }]}
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
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
  cardsContainer: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    width: '50%',
    height: width / 2 + 20,
    padding: 10
  },
  cardCol: {
    width: '100%',
    borderColor: ColorPalletes.dustyGrey,
    borderWidth: 1,
  },
  cardImage: {
    height: '50%',
    width: '100%',
  },
  cardContent: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  cardHeader: {
    fontSize: 16,
    padding: 10,
  },
  cardButton: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 5
  }
});