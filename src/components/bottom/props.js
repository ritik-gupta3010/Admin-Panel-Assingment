import {setDataLimit,setDate,setCurrentPage,fetchBottomData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxBottomVar:state.bottom,
    page:state.page
    
})
const mapDispatchToProps=(dispatch)=>({
    fetchBottomData:(currentPage)=>dispatch(fetchBottomData(currentPage)),
    setDataLimit:(limit)=>dispatch(setDataLimit(limit)),
    setDate:(date)=>dispatch(setDate(date)),
    setCurrentPage:(page)=>dispatch(setCurrentPage(page))

})

export {
    mapStateToProps,
    mapDispatchToProps
};