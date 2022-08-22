const initialState = []

export let categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATEGORIES': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
