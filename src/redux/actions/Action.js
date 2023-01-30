import axios from 'axios';
import moment from 'moment';
export const fetchTopData=()=>{
    return (dispatch)=>{
        axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10`)
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

export const fetchBottomData=(currentPage)=>(dispatch,getState)=>{
    const{limit,startD,endD}=getState();
    console.log(limit)
    console.log(getState())
        axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=${currentPage}&limit=${limit}`)
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
export const setDataLimit=(limit)=>{
    console.log(limit)
    return dispatch=>{
        dispatch({
            type:'SET_DATA_LIMIT',
            data:limit
        })
    }
}
export const setStartDate=(startDate)=>{
    // moment.utc(reduxBottomVar[1].data[0].created_At).format("DD MMM YYYY")
    
    console.log(startDate[0] && startDate[0].$d)
    console.log("start date",startDate[0] && moment.utc(startDate[0].$d).format("YYYY-MM-DD"));
    console.log("end date",startDate[1] && startDate[1].$d);
    console.log("end date new ",startDate[1] && moment.utc(startDate[1].$d).format("YYYY-MM-DD"));
    return dispatch=>{
        dispatch({
            type:'SET_DATE',
            data:startDate
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