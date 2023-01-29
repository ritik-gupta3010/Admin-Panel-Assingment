const initialState={
    top:[],
    bottom:[]
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCHTOPDATA":
            return {...state,top:action.data}
        case "FETCHBOTTOMDATA":
            return {...state,bottom:action.data}
        default:
            return state
    }
}
export default reducer;