export let stateActions = {
	setCategories: (categories) => {
		return {
			type: 'SET_CATEGORIES',
			payload: categories
		}
	},
	setUser: (type, user, jwt) => {
		return {
			type: 'SET_USER',
			payload: { type, user, jwt }
		}
	},
	removeCartItem: (productId) => {
		return {
			type: 'REMOVE_CART_ITEM',
			payload: { productId }
		}
	},
	addCartItem: (product, quantity, variant) => {
		return {
			type: 'ADD_CART_ITEM',
			payload: { product, quantity, variant }
		}
	},
	logout: () => {
		return { type: 'LOGOUT' }
	},
}