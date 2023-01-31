import moment from 'moment';
const initialState={
    top:{},
    bottom:{},
    limit:50,
    startD:"",
    endD:"",
    page:1
}

const reducer=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case "FETCHTOPDATA":
            return {...state,top:action.data}
        case "FETCHBOTTOMDATA":
            // console.log(action.data)
            const {bottom}=state;
            const updatedBottomData=Object.assign({},bottom);
            let currentPage=action.data.data.current;
            updatedBottomData[currentPage]=action.data.data;
            // console.log(updatedBottomData)
            return {...state,bottom:updatedBottomData}
        case "SET_LIMIT":
            return {...state,limit:action.data}
        case "SET_DATE":
            console.log("start ",action.data && action.data[0])
            console.log("start ",action.data && action.data[0] && moment(action.data[0].$d).format("YYYY-MM-DD"))
            console.log("end",action.data && action.data[1])
            console.log("end",action.data && action.data[1] && moment(action.data[1].$d).format("YYYY-MM-DD"))
            return {
                ...state,
                startD:action.data && action.data[0] && moment(action.data[0].$d).format("YYYY-MM-DD"),
                endD:action.data && action.data[1] && moment(action.data[1].$d).format("YYYY-MM-DD")
            }
        case "SETCURRPAGE":
            return{...state,page:action.data}
        default:
            return state
    }
}
export default reducer;