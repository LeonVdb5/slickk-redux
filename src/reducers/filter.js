import { ProductHoldFilters, ProductShineFilters, HairLengthFilters, HairTypeFilters } from '../constants'

export const ProductHoldFilter = (state = ProductHoldFilters.SHOW_ALL_HOLD, action) => {
	switch (action.type) {
		case 'SET_HOLD_FILTER':
			return action.filter 
		case 'RESET_FILTER':
			return ProductHoldFilters.SHOW_ALL_HOLD
		default:
			return state
	}
}

export const ProductShineFilter = (state = ProductShineFilters.SHOW_ALL_SHINE, action) => {
	switch (action.type) {
		case 'SET_SHINE_FILTER':
			return action.filter 
		case 'RESET_FILTER':
			return ProductShineFilters.SHOW_ALL_SHINE
		default:
			return state
	}
}

export const HairLengthFilter = (state = HairLengthFilters.SHOW_ALL_LENGTH, action) => {
	switch (action.type) {
		case 'SET_HAIRLENGTH_FILTER':
			return action.filter 
		case 'RESET_FILTER':
			return HairLengthFilters.SHOW_ALL_LENGTH
		default:
			return state
	}
}

export const HairTypeFilter = (state = HairTypeFilters.SHOW_ALL_HAIRTYPES, action) => {
	switch (action.type) {
		case 'SET_HAIRTYPE_FILTER':
			return action.filter 
		case 'RESET_FILTER':
			return HairTypeFilters.SHOW_ALL_HAIRTYPES
		default:
			return state
	}
}
