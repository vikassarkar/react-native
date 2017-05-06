
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class SortComponent extends Component{
  
  constructor(props) {
    super(props);
    this.state={
    }
  }

  _sortTable(val){
      alert("sort data for ##--##"+val)
    //this._onFetch(1)
  }

 _setModalVisible(visible) {
      this.props.setModalVisible(visible);
  }


  render() {
   return(
        <Modal
                  animationType={"slide"}
                  transparent={true}
                  onRequestClose={() => {console.warn("modal closed")}}
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
                                    onPress={() => this._setModalVisible(false)}/>
                                  <Text style={modalStyles.text}>Sort modal</Text>
                              </View>
                            </TouchableWithoutFeedback>
                          </View>   
                      </TouchableWithoutFeedback>                     
                </Modal>
   )
  }
}

const modalStyles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.4)'
  },

  modal: {
    marginTop:DEVICE_HEIGHT/5.8,
    alignSelf: 'center',
    height:DEVICE_HEIGHT-DEVICE_HEIGHT/2.9,
    width:DEVICE_WIDTH-DEVICE_WIDTH/6,
    backgroundColor: "#fff",
  },

  closeBtn: {
    padding: 10,
    top:0,
    alignItems:'flex-end'

  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: "#000",
    fontSize: 22
  }

});