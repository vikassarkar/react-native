
const SwitchPage = {
    route: function(action, Actions){
        switch(action) {
			case 'dashboard':
		        Actions.dashboard();
		        break;
		    case 'home':
		        Actions.home();
		        break;
		    case 'secondScreen':
		        Actions.secondScreen();
		        break;
		    default:
		        Actions.home();
		}
    }
}


export default SwitchPage