import {connect} from 'react-redux';
import Top from "./Top"
import {mapStateToProps,mapDispatchToProps} from "./props"

export default connect(mapStateToProps,mapDispatchToProps)(Top);