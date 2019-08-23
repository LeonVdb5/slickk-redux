import {connect} from 'react-redux';
import { setVisibilityFilter } from '../actions/index'; 
import Link from '../components/Link';


const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect( 
	mapDispatchToProps
	)(Link)