/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * route actions config for navigating in b/w pages
 */
const RouteActions = {
    route: function(action, Actions){
        switch(action) {
			case 'page_dashboard':
		        Actions.page_dashboard();
		        break;
		    case 'page_profile':
		        Actions.page_profile();
				break;
			case 'page_usage':
		        Actions.page_usage();
				break;
		    case 'basecomponent_table':
		        Actions.basecomponent_table();
		        break;
			case 'basecomponent_accordion':
		        Actions.basecomponent_accordion();
		        break;
			case 'basecomponent_table_rowDetails':
		        Actions.basecomponent_table_rowDetails();
		        break;
		    default:
		        Actions.page_dashboard();
		}
    }
};

export default RouteActions;