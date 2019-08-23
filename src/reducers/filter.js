import { ProductHoldFilters, ProductShineFilters, HairLengthFilters, HairTypeFilters } from '../constants'

export const ProductHoldFilter = (state = ProductHoldFilters.SHOW_ALL_HOLD, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter 
		default:
			return state
	}
}

export const ProductShineFilter = (state = ProductShineFilters.SHOW_ALL_SHINE, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter 
		default:
			return state
	}
}

export const HairLengthFilter = (state = HairLengthFilters.SHOW_ALL_LENGTH, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter 
		default:
			return state
	}
}

export const HairTypeFilter = (state = HairTypeFilters.SHOW_ALL_HAIRTYPES, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter 
		default:
			return state
	}
}
