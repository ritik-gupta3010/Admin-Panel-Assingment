import {setDataLimit,setDate,setCurrentPage,fetchBottomData,fetchTopData } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    reduxBottomVar:state.bottom,
    page:state.page
    
})
const mapDispatchToProps=(dispatch)=>({
    fetchTopData:()=>dispatch(fetchTopData()),
    fetchBottomData:()=>dispatch(fetchBottomData()),
    setDataLimit:(limit)=>dispatch(setDataLimit(limit)),
    setDate:(date)=>dispatch(setDate(date)),
    setCurrentPage:(page)=>dispatch(setCurrentPage(page))

})

export {
    mapStateToProps,
    mapDispatchToProps
};