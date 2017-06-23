import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View
} from 'react-native';
import { 
	Router, 
	Scene, 
	Actions, 
	ActionConst 
} from 'react-native-router-flux';
import {
  	List,
  	ListItem,
  	SideMenu
} from 'react-native-elements';
import SwitchPage from '../utils/SwitchPage'

import AppRouter from './routers/AppRouter';
import menuList from '../config/AppMenuList.config';

export default class AppMainView extends Component {
	constructor (props) {
	    super(props)
	    this.state = {
	      menuOpen: false,
	      routeData: menuList[0]
	    }
	    this.toggleSideMenu = this.toggleSideMenu.bind(this)
	}

	toggleSideMenu () {
	    this.setState({
	      menuOpen: !this.state.menuOpen
	    })
	}

	onSideMenuChange (menuOpen, self) {
	    self.setState({
	      menuOpen: menuOpen	      
	    })
	}

	renderActions (data) {
	    this.setState({ 
	        routeData : data
	    });   
			SwitchPage.route(data.key, Actions)
			this.setState({
				menuOpen: !this.state.menuOpen
			})
	}

  	render() {
  		const AppMenu = (
					<View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
						<List containerStyle={{marginBottom: 20}}>
						{
							menuList.map((l, i) => (
								<ListItem
									onPress={this.renderActions.bind(this, l)}
									listnumber={i}
									key={l.key}
									title={l.name}
									subtitle={l.subtitle}
								/>
							))
						}
						</List>
					</View>
				)

	  	return (
		  	<SideMenu
		        isOpen={this.state.menuOpen}
		        onChange={(menuOpen) => this.onSideMenuChange(menuOpen, this)}
		        menuPosition="left"
		        menu={AppMenu}>
							<AppRouter 
								style={{marginTop:60}}
								toggleSideMenu={this.toggleSideMenu}
								onButtonEvent = {this.props.onButtonEvent} 
								state={this.props.state}/>
	      	</SideMenu>
					
	  	);
	}
}