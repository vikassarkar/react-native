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
	View
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
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

/**
 * Import widget required files
 */
import RouteActions from './routers/RouteActions'
import AppRouter from './routers/AppRouter';
import MenuList from '../config/AppMenuList.config';

/**
 * Create App main widget containing all route pages after login
 */
export default class AppMainView extends Component {

	/**
     * Initillize constructor
     * @param {*} props - property attribute variables assigned in element
     */
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
			routeData: MenuList[0]
		}
		this.toggleSideMenu = this.toggleSideMenu.bind(this)
	}

	/**
	 * toggle menu to open and close
	 */
	toggleSideMenu() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	/**
	 * event triggered on change of side menu view open/closed
	 * @param {*} menuOpen 
	 * @param {*} self 
	 */
	onSideMenuChange(menuOpen, self) {
		self.setState({
			menuOpen: menuOpen
		})
	}

	/**
	 * actions for routing on menu list items click/press/touch
	 * @param {*} data 
	 */
	renderActions(data) {
		this.setState({
			routeData: data
		});
		RouteActions.route(data.key, Actions)
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

    /**
     * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
     */
	render() {
		const AppMenu = (
			<View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 30 }}>
				<List containerStyle={{ marginBottom: 20 }}>
					{
						MenuList.map((l, i) => (
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
		);
		return (
			<SideMenu
				isOpen={this.state.menuOpen}
				onChange={(menuOpen) => this.onSideMenuChange(menuOpen, this)}
				menuPosition="left"
				menu={AppMenu}>
				<AppRouter
					style={{ marginTop: 60 }}
					toggleSideMenu={this.toggleSideMenu}
					onButtonEvent={this.props.onButtonEvent}
					state={this.props.state} />
			</SideMenu>
		);
	}
};