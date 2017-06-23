
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class TableSearchComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      pickerSearch:'java',
      inputSearch:''
    }
  }

  _searchTable(){
      alert("search data for ##--##"+this.state.inputSearch+"##--##"+this.state.pickerSearch);
    //this._onFetch(1)
  }

  render() {
   return(
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
                    style={[styles.searchButton, {backgroundColor: this.state.inputSearch && this.state.pickerSearch? '#00549A': '#e5e5e5' }]}
                    testID="searchTablePage"                    
                    title="search"
                    disabled={this.state.inputSearch && this.state.pickerSearch? false : true}>
                  <FontAwesome name="search" 
                  size={20} 
                  color="#fff" 
                  style={{alignSelf:'center'}}/>
                </TouchableOpacity>
              </View>
    )
  }
}


const styles = StyleSheet.create({
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
