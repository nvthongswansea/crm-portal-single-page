export default function(state=null, action) {
	
	switch(action.type) {
		case "COMPONENT_SELECTED" : 
		return action.payload;
	}

	return state;
}