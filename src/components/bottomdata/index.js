import {connect} from 'react-redux';
import BottomData from "./BottomData"
import {mapStateToProps,mapDispatchToProps} from "./props"

export default connect(mapStateToProps,mapDispatchToProps)(BottomData);