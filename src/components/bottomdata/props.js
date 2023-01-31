import { fetchBottomData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxBottomVar:state.bottom,
    page:state.page
    
})
const mapDispatchToProps=(dispatch)=>({
    fetchBottomData:()=>dispatch(fetchBottomData())

})

export {
    mapStateToProps,
    mapDispatchToProps
};