import { fetchBottomData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxBottomVar:state.bottom
})
const mapDispatchToProps=(dispatch)=>({
    fetchBottomData:()=>dispatch(fetchBottomData())
})

export {
    mapStateToProps,
    mapDispatchToProps
};