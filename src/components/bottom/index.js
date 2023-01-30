import {connect} from 'react-redux';
import Bottom from "./Bottom"
import {mapStateToProps,mapDispatchToProps} from "./props"

export default connect(mapStateToProps,mapDispatchToProps)(Bottom);