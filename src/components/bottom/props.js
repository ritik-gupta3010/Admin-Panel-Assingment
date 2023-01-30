import {setDataLimit,setStartDate,setEndDate } from "../../redux/actions/Action";

const mapStateToProps=(state)=>({
    // reduxBottomVar:state.bottom
    
})
const mapDispatchToProps=(dispatch)=>({
    setDataLimit:(limit)=>dispatch(setDataLimit(limit)),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    // setEndDate:(endDate)=>dispatch(setEndDate(endDate)),

})

export {
    mapStateToProps,
    mapDispatchToProps
};