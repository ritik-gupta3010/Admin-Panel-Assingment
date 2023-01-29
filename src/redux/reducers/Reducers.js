const initialState={
    top:{},
    bottom:{},
    currentPageIndex:0,
    limit:50
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
        default:
            return state
    }
}
export default reducer;