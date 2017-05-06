
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView,
  RefreshControl,
  ActivityIndicator,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
  Button,
  Modal,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

import GiftedListView from '../../libs/GiftedListView';
import Dimensions from 'Dimensions';
import Tabs from 'react-native-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const data1 = [
        {
          title:"1 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"2 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"3 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"4 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"5 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"6 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"7 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"8 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"9 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"10 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }
      ]
const data2 = [
        {
          title:"11 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"12 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"13 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"14 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"15 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"16 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"17 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"18 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"19 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"20 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }      
      ]
const data3 = [
        {
          title:"21 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"22 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"23 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"24 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"25 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"26 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"27 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"28 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"29 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"30 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }      
      ]
const data4 = [
        {
          title:"31 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"32 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"33 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"34 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"35 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"36 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"37 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"38 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"39 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"40 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }      
      ]
const data5 = [
        {
          title:"41 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"42 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"43 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"44 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"45 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"46 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"47 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"48 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"49 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"40 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }      
      ]
const data6 = [
        {
          title:"51 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"52 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"53 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"54 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"55 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"56 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"57 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"58 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"59 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        },
        {
          title:"60 row",
          description:"lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum"
        }      
      ]
export default class HomeWidget extends Component {
  constructor(props) {
    super(props);
    this.callbackFunction;
    this.state={
      tab: '',
      highlightColor:'#000',
      pickerSearch:'java',
      inputSearch:'',
      tableSort:'java',
      sortVisible:false,
      filterVisible:false
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
    this.callbackFunction = callback;
    setTimeout(() => {
      switch(page) {
        case 1:
            loadData = data1;
            break;
        case 2:
            loadData = data2;
            break;
        case 3:
            loadData = data3;
            break;
        case 4:
            loadData = data4;
            break;
        case 5:
            loadData = data5;
            break;
        case 6:
            loadData = data6;
            break;
        default:
            loadData = data1;
      }
      if (page === 5) {
        callback(loadData, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(loadData);
      }
    }, 1000); // simulating network fetching
  }


  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPressSingleRequest(rowData) {
    alert('hi')
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={()=> this._onPressSingleRequest()}>
        <Text>{rowData.title}</Text>
        <Text>{rowData.description}</Text>
      </TouchableOpacity>
    )
  }

  _setModalVisible(visible, view) {
 
    if(view == 'Sort'){
        this.setState({sortVisible: visible});
    }
    if(view == 'Filter'){
        this.setState({filterVisible: visible});
    }
  }

  _searchTable(){
      alert("search data for ##--##"+this.state.inputSearch+"##--##"+this.state.pickerSearch);
    //this._onFetch(1)
  }

  _sortTable(val){
      this.setState({tableSort: val, sortVisible: false})
      alert("sort data for ##--##"+val)
    //this._onFetch(1)
  }

  _filterTable(){
    alert("filter data for ##--##"+this.state.inputSearch+"##--##"+this.state.pickerSearch);
    //this._onFetch(1)
  }

  _renderTabviews(view){
    if(this.state.tab == view){
      this.setState({tab:'', highlightColor: '#000'});
    }else{
      this.setState({tab:view, highlightColor: 'red'});
    }
    if(view == 'Sort'){
        this.setState({tab:view, sortVisible: true});
    }
    if(view == 'Filter'){
        this.setState({tab:view, filterVisible: true});
    }
  }

  render() {
    return (
    <View style={[styles.container, {marginTop:60}]}>
        <View style={styles.navBar}>
          <Tabs selected={this.state.tab}
                selectedStyle={{color:this.state.highlightColor}} 
                onSelect={(e)=>this._renderTabviews(e.props.tabName)}>
              <FontAwesome tabName="Search" 
                  name="search"
                  size={20} 
                  style={{alignSelf:'center'}}/>
              <FontAwesome tabName="Sort" 
                  name="sort-amount-asc"
                  size={20} 
                  style={{alignSelf:'center'}}/>
              <FontAwesome tabName="Filter" 
                  name="filter"
                  size={20} 
                  style={{alignSelf:'center'}}/>
          </Tabs>    
        </View>


        <View style={styles.tabsView}>          
            { this.state.tab == 'Search' &&
              <View style={styles.searchbar}>
                <TextInput
                style={styles.searchInput}
                autocorrect={false} 
                underlineColorAndroid='transparent'
                placeholder='Type Here.'
                onChangeText={(text) => this.setState({inputSearch: text})}
                value={this.state.inputSearch}/>
                <Text style={styles.seperator}>|</Text>
                <Picker
                  style={styles.pickerDropdown}
                  mode="dialog"                
                  selectedValue={this.state.pickerSearch}
                  itemStyle={styles.pickerDialog}
                  onValueChange={(val) => this.setState({pickerSearch: val})}>
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React" value="rt" />
                </Picker>
                <TouchableOpacity                
                    onPress={()=> this._searchTable()}
                    activeOpacity={this.state.inputSearch != '' ? 0.5 : 1}
                    style={[styles.searchButton, {backgroundColor: this.state.inputSearch? '#00549A': '#ccc' }]}
                    testID="searchTablePage"                    
                    title="search"
                    disabled={this.state.inputSearch ? false : true}>
                  <FontAwesome name="search" 
                  size={20} 
                  color="#fff" 
                  style={{alignSelf:'center'}}/>
                </TouchableOpacity>
              </View>
            }
            { this.state.tab == 'Sort' && 
                <Modal
                  animationType={"slide"}
                  transparent={true}
                  onRequestClose={() => {alert("Modal has been closed.")}}
                  visible={this.state.sortVisible}>
                  
                     <TouchableWithoutFeedback
                        onPress={() => {this.setState({sortVisible: !this.state.sortVisible})}} >
                          <View
                          style={modalStyles.wrapper}>
                            <TouchableWithoutFeedback>
                              <View                      
                                style={modalStyles.modal}>
                                  <FontAwesome 
                                    name="close"
                                    size={20} 
                                    style={modalStyles.CloseBtn}
                                    onPress={() => {this._setModalVisible(false, 'Sort')}}/>
                                    <Text style={modalStyles.text}>Sort modal</Text>
                              </View>
                            </TouchableWithoutFeedback>
                          </View>
                     </TouchableWithoutFeedback>                         
                </Modal>
            }
            { this.state.tab == 'Filter' && 
                <Modal
                  animationType={"slide"}
                  transparent={true}
                  onRequestClose={() => {console.warn("modal closed")}}
                  visible={this.state.filterVisible}>   
                                   
                      <TouchableWithoutFeedback
                        onPress={() => {this.setState({filterVisible: !this.state.filterVisible})}}>
                          <View
                          style={modalStyles.wrapper}>  
                            <TouchableWithoutFeedback>
                              <View                      
                                style={modalStyles.modal}>
                                  <FontAwesome 
                                    name="close"
                                    size={20} 
                                    style={modalStyles.CloseBtn}
                                    onPress={() => {this._setModalVisible(false, 'Filter')}}/>
                                  <Text style={modalStyles.text}>Filter modal</Text>
                              </View>
                            </TouchableWithoutFeedback>
                          </View>   
                      </TouchableWithoutFeedback>                     
                </Modal>
            }
        </View>

        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
          refreshableTintColor="blue"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC',
    alignItems:'center'
  },      
  tabsView: {
    alignItems: 'center',
    width: DEVICE_WIDTH
  },
  row: {
    padding: 10
  },

  searchbar: {
    width: DEVICE_WIDTH,
    backgroundColor: '#CCC',
    padding: 10,
    alignItems:'center',
    flexDirection: 'row' 
  },
  searchInput:{
    width: "50%",
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    height: 40
  },
  pickerDropdown:{
    width: "30%",
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#fff',
    alignItems:'center',
    height: 40,
  },
  searchButton:{
    width: "19.5%",
    paddingTop:10,
    paddingBottom:10,
    height: 40,
    borderWidth: 0,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:"#00549A"
  },
  seperator:{
    width: "0.5%",
    height: 40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#fff',
    color:'#000'
  },
  pickerDialog:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    backgroundColor: '#00549A',
  }
});

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