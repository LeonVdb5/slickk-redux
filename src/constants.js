//Fetch Posts
export const REQUEST_POSTS_PENDING = 'REQUEST_POSTS_PENDING';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';
export const REQUEST_POSTS_FAILED = 'REQUEST_POSTS_FAILED';

//Auth 
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';


//Filter Posts
export const ProductHoldFilters = {
	SHOW_ALL_HOLD: 'all-holds',
	SHOW_HIGH_HOLD: 'high-hold',
	SHOW_MED_HOLD: 'med-hold',
	SHOW_LOW_HOLD: 'low-hold'	
}
export const ProductShineFilters = {
	SHOW_ALL_SHINE: 'all-shines',
	SHOW_HIGH_SHINE: 'high-shine',
	SHOW_MED_SHINE: 'med-shine',
	SHOW_LOW_SHINE: 'low-shine'
}
export const HairLengthFilters = {
	SHOW_ALL_LENGTH: 'all-lengths',
	SHOW_SHORT_LENGTH: 'short',
	SHOW_MED_LENGTH: 'medium',
	SHOW_LONG_LENGTH: 'long'
}
export const HairTypeFilters = {
	SHOW_ALL_HAIRTYPES : 'all-types',
	SHOW_STRAIGHT_HAIR : 'straight',
	SHOW_WAVY_HAIR : 'wavy',
	SHOW_CURLY_HAIR : 'curly',
	SHOW_COILY_HAIR : 'coily'
}
export const RESET_FILTER = 'RESET_FILTER';