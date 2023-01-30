import moment from 'moment';
const initialState={
    top:{},
    bottom:{},
    currentPageIndex:0,
    limit:50,
    startD:0,
    endD:0,
}

const reducer=(state=initialState,action)=>{

    switch (action.type) {
        case "FETCHTOPDATA":
            return {...state,top:action.data}
        case "FETCHBOTTOMDATA":
            console.log(action.data)
            const {bottom}=state;
            const updatedBottomData=Object.assign({},bottom);
            let currentPage=action.data.data.current;
            updatedBottomData[currentPage]=action.data.data;
            console.log(updatedBottomData)
            return {...state,bottom:updatedBottomData}
        case "SET_DATA_LIMIT":
            return {...state,limit:action.data}
        case "SET_DATE":
            return {...state,startD:action.data[0] && moment.utc(action.data[0].$d).format("YYYY-MM-DD"),endD:action.data[1] && moment.utc(action.data[1].$d).format("YYYY-MM-DD")}
        default:
            return state
    }
}
export default reducer;