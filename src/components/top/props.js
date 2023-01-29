import { fetchTopData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxTopVar:state.top
})
const mapDispatchToProps=(dispatch)=>({
    fetchTopData:()=>dispatch(fetchTopData())
})

export {
    mapStateToProps,
    mapDispatchToProps
};