const initialState = {
	type: null,
	user: null,
	jwt: null
}

export let userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER': {
			if(action.payload.jwt) {
				localStorage.setItem('JWT', action.payload.jwt)
				localStorage.setItem('utype', action.payload.type)
			}
			return action.payload;
		}
		case 'LOGOUT': {
			localStorage.removeItem('JWT')
			localStorage.removeItem('utype')
			return { type: null, user: null, jwt: null };
		}
		default: {
			return state;
		}
	}
}
