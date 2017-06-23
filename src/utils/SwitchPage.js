
const SwitchPage = {
    route: function(action, Actions){
        switch(action) {
			case 'page_dashboard':
		        Actions.page_dashboard();
		        break;
		    case 'page_profile':
		        Actions.page_profile();
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
}


export default SwitchPage