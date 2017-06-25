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
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Picker
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
 * Create search widget
 */
export default class TableSearchComponent extends Component {

	/**
	 * Initillize constructor
   * @param {*} props
	 */
  constructor(props) {
    super(props);
    this.state = {
      pickerSearch: 'java',
      inputSearch: ''
    }
  }

  /**
   * On Search submit
   * @param {*} val 
   */
  _searchTable() {
    alert("search data for ##--##" + this.state.inputSearch + "##--##" + this.state.pickerSearch);
    //this._onFetch(1)
  }

  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (
      <View style={styles.searchbar}>
        <TextInput
          style={styles.searchInput}
          autocorrect={false}
          underlineColorAndroid='transparent'
          placeholder='Type Here.'
          onChangeText={(text) => this.setState({ inputSearch: text })}
          value={this.state.inputSearch} />
        <Text style={styles.seperator}>|</Text>
        <Picker
          style={styles.pickerDropdown}
          mode="dialog"
          selectedValue={this.state.pickerSearch}
          itemStyle={styles.pickerDialog}
          onValueChange={(val) => this.setState({ pickerSearch: val })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="React" value="rt" />
        </Picker>
        <TouchableOpacity
          onPress={() => this._searchTable()}
          activeOpacity={this.state.inputSearch != '' ? 0.5 : 1}
          style={[styles.searchButton, { backgroundColor: this.state.inputSearch && this.state.pickerSearch ? ColorPalletes.bellBlue : ColorPalletes.hexGray }]}
          testID="searchTablePage"
          title="search"
          disabled={this.state.inputSearch && this.state.pickerSearch ? false : true}>
          <FontAwesome name="search"
            size={20}
            color={ColorPalletes.white}
            style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
  searchbar: {
    width: DEVICE_WIDTH,
    backgroundColor: ColorPalletes.dustyGrey,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchInput: {
    width: "50%",
    backgroundColor: ColorPalletes.white,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    height: 40
  },
  pickerDropdown: {
    width: "30%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: ColorPalletes.white,
    alignItems: 'center',
    height: 40,
  },
  searchButton: {
    width: "19.5%",
    paddingTop: 10,
    paddingBottom: 10,
    height: 40,
    borderWidth: 0,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorPalletes.bellBlue
  },
  seperator: {
    width: "0.5%",
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: ColorPalletes.white,
    color: ColorPalletes.black
  },
  pickerDialog: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: ColorPalletes.bellBlue,
  }
});
