/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

/**
 * Import widget dependent other libraries
 */
import Tabs from 'react-native-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../../assets/styles/style.color.palletes';
import TableSearchComponent from './TableSearchComponent'
import TableSortComponent from './TableSortComponent'
import TableFilterComponent from './TableFilterComponent'

/**
 * define widget constants
 */
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * Create Tab widget
 */
export default class TableSearchBarTabs extends Component {

	/**
	 * Initillize constructor
   * @param {*} props
	 */
  constructor(props) {
    super(props);
    this.callbackFunction;
    this.state = {
      tab: '',
      highlightColor: ColorPalletes.black,
      sortVisible: false,
      filterVisible: false
    }
  }
  /**
   * Set visiblity of modals on click of tab
   * @param {*} visible 
   * @param {*} view 
   */
  _setModalVisible(visible, view) {
    if (view == 'Sort') {
      this.setState({ sortVisible: visible });
    }
    if (view == 'Filter') {
      this.setState({ filterVisible: visible });
    }
  }

  /**
   * Filter table on filter submit
   */
  _filterTable() {
    alert("filter data for ##--##" + this.state.inputSearch + "##--##" + this.state.pickerSearch);
    //this._onFetch(1)
  }

  /**
   * Render Tab html
   * @param {*} view 
   */
  _renderTabviews(view) {
    if (this.state.tab == view) {
      this.setState({ tab: '', highlightColor: ColorPalletes.black });
    } else {
      this.setState({ tab: view, highlightColor: ColorPalletes.bloodRed });
    }
    if (view == 'Sort') {
      this.setState({ tab: view, sortVisible: true });
    }
    if (view == 'Filter') {
      this.setState({ tab: view, filterVisible: true });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <Tabs selected={this.state.tab}
            selectedStyle={{ color: this.state.highlightColor }}
            onSelect={(e) => this._renderTabviews(e.props.tabName)}>
            <FontAwesome tabName="Search"
              name="search"
              size={20}
              style={{ alignSelf: 'center' }} />
            <FontAwesome tabName="Sort"
              name="sort-amount-asc"
              size={20}
              style={{ alignSelf: 'center' }} />
            <FontAwesome tabName="Filter"
              name="filter"
              size={20}
              style={{ alignSelf: 'center' }} />
          </Tabs>
        </View>
        <View style={styles.tabsView}>
          {this.state.tab == 'Search' &&
            <TableSearchComponent />
          }
          {this.state.tab == 'Sort' &&
            <TableSortComponent
              sortVisible={this.state.sortVisible}
              setModalVisible={(visible) => this._setModalVisible(visible, 'Sort')} />
          }
          {this.state.tab == 'Filter' &&
            <TableFilterComponent
              filterVisible={this.state.filterVisible}
              setModalVisible={(visible) => this._setModalVisible(visible, 'Filter')} />
          }
        </View>
      </View>
    );
  }
};

/**
 * Create widget styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalletes.white
  },
  navBar: {
    height: 64,
    backgroundColor: ColorPalletes.dustyGrey,
    alignItems: 'center'
  },
  tabsView: {
    alignItems: 'center',
    width: DEVICE_WIDTH
  }
});
