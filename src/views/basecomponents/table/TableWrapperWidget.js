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
  Dimensions,
  TouchableOpacity
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import Tabs from 'react-native-tabs';
import { Actions, ActionConst } from 'react-native-router-flux';

/**
 * Import widget required files
 */
import ColorPalletes from '../../../assets/styles/style.color.palletes';
import { RowAction } from '../../../reduxconfig/actions/EmmitTableActions';
import store from '../../../reduxconfig/store/StoreConfiguration';
import RouteActions from '../../routers/RouteActions';
import TableListView from '../../../libs/TableListView';
import TableSearchBarTabs from './components/TableSearchBarTabs';

/**
 * Import widget Mock data
 */
import TableData from '../../../mockstubs/TableData';

/**
 * define widget constants
 */
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * Create table page widget
 */
export default class TableWrapperWidget extends Component {
  /**
	 * Initillize constructor
   * @param {*} props
	 */
  constructor(props) {
    super(props);
    this.state = {
      highlightColor: ColorPalletes.black,
    }
  }

  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page, callback, options) {
    let callbackFn = callback,
      loadData = [];
    setTimeout(() => {
      switch (page) {
        case 1:
          loadData = TableData.data1;
          break;
        case 2:
          loadData = TableData.data2;
          break;
        case 3:
          loadData = TableData.data3;
          break;
        case 4:
          loadData = TableData.data4;
          break;
        case 5:
          loadData = TableData.data5;
          break;
        case 6:
          loadData = TableData.data6;
          break;
        default:
          loadData = TableData.data1;
      }
      if (page === 5) {
        callbackFn(loadData, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callbackFn(loadData);
      }
    }, 1000); // simulating network fetching
  }

  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _rowPressed(rowData) {
    store.dispatch(RowAction(rowData));
    RouteActions.route('basecomponent_table_rowDetails', Actions);
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this._onRowPressed(rowData)}>
        <Text>{rowData.title}</Text>
        <Text>{rowData.description}</Text>
      </TouchableOpacity>
    )
  }

  /**
   * on filtering data
   */
  _filterTable() {
    alert("filter data for ##--##" + this.state.inputSearch + "##--##" + this.state.pickerSearch);
    //this._onFetch(1)
  }

  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (
      <View style={[styles.container, { marginTop: 60 }]}>
        <TableSearchBarTabs />

        <TableListView
          rowView={this._renderRowView}
          onRowPress={(rowData) => this._rowPressed(rowData)}
          onFetch={(page, callback, options) => this._onFetch(page, callback, options)}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: ColorPalletes.bellBlue,
              width: '95%',
              alignItems: 'center',
              alignSelf: 'center',
              padding: 7,
              marginTop: 20
            },
          }}
          refreshableTintColor={ColorPalletes.white}
        />
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
  row: {
    width: '95%',
    alignSelf: 'center',
    padding: 15,
    borderColor: ColorPalletes.bellBlue,
    borderBottomWidth: 1.5,
  }
});
