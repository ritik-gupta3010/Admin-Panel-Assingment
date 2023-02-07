import axios from 'axios';
// import moment from 'moment';
export const fetchTopData=()=>(dispatch,getState)=>{
    const{limit,startD,endD,page}=getState();
    console.log(startD) 
    // console.log(limit)
    // console.log(getState())
    if((startD !==""|| startD!==null) && (endD !== "" && endD!==null))
    {
        axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${startD}&todate=${endD}&page=${page}&limit=${limit}`)
        .then(response =>{
            dispatch({
                type: "FETCHTOPDATA",
                data: response.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: "ERROR",
                msg: "Unable to fetch data" 
            })
        })
    }
}

export const fetchBottomData=()=>(dispatch,getState)=>{
    const{limit,startD,endD,page}=getState();
    // console.log(startD) 
    // console.log(limit)
    // console.log(getState())
    if((startD !==""|| startD!==null) && (endD !== "" && endD!==null))
    {
        axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startD}&todate=${endD}&page=${page}&limit=${limit}`)
        .then(response =>{
            dispatch({
                type: "FETCHBOTTOMDATA",
                data: response.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: "ERROR",
                msg: "Unable to fetch data" 
            })
        })
    }
}
export const setDataLimit=(limit)=>{
    // console.log(limit)
    return dispatch=>{
        dispatch({
            type:'SET_LIMIT',
            data:limit
        })
    }
}
export const setDate=(date)=>{
    // console.log(date)
    return dispatch=>{
        dispatch({
            type:'SET_DATE',
            data:date
        })
        
    }
}
// export const setEndDate=(endDate)=>{
//     console.log("end date",endDate);
//     return dispatch=>{
//         dispatch({
//             type:'SET_END_DATE',
//             data:endDate
//         })
//     }
// }
export const setCurrentPage=(page)=>{
    // console.log("in action page",page)
    return dispatch=>{
        dispatch({
            type:"SETCURRPAGE",
            data:page
        })
    }
}