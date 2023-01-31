import { fetchBottomData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxBottomVar:state.bottom,
    page:state.page
    
})
const mapDispatchToProps=(dispatch)=>({
    fetchBottomData:(currentPage)=>dispatch(fetchBottomData(currentPage))

})

export {
    mapStateToProps,
    mapDispatchToProps
};