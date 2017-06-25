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
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';

/**
 * define widget constants
 */
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * Create Sort widget
 */
export default class TableSortComponent extends Component {

	/**
	 * Initillize constructor
   * @param {*} props
	 */
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  /**
   * On sort submit
   * @param {*} val 
   */
  _sortTable(val) {
    alert("sort data for ##--##" + val)
    //this._onFetch(1)
  }

  /**
   * Set sort modal to show on screen
   * @param {*} visible 
   */
  _setModalVisible(visible) {
    this.props.setModalVisible(visible);
  }

  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        onRequestClose={() => { console.warn("modal closed") }}
        visible={this.props.sortVisible}>

        <TouchableWithoutFeedback
          onPress={() => this._setModalVisible(false)}>
          <View
            style={modalStyles.wrapper}>
            <TouchableWithoutFeedback>
              <View
                style={modalStyles.modal}>
                <FontAwesome
                  name="close"
                  size={20}
                  style={modalStyles.CloseBtn}
                  onPress={() => this._setModalVisible(false)} />
                <Text style={modalStyles.text}>Sort modal</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

      </Modal>
    )
  }
};

/**
 * Create widget styles
 */
const modalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: ColorPalletes.bgOverlay
  },
  modal: {
    marginTop: DEVICE_HEIGHT / 5.8,
    alignSelf: 'center',
    height: DEVICE_HEIGHT - DEVICE_HEIGHT / 2.9,
    width: DEVICE_WIDTH - DEVICE_WIDTH / 6,
    backgroundColor: ColorPalletes.white,
  },
  closeBtn: {
    padding: 10,
    top: 0,
    alignItems: 'flex-end'
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: ColorPalletes.black,
    fontSize: 22
  }
});