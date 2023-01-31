import axios from 'axios';
// import moment from 'moment';
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
    console.log(startD) 
    console.log(limit)
    // console.log(getState())
        axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startD}&todate=${endD}&page=${currentPage}&limit=${limit}`)
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
            type:'SET_LIMIT',
            data:limit
        })
    }
}
export const setDate=(date)=>{
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
    console.log(page)
    return dispatch=>{
        dispatch({
            type:"SETCURRPAGE",
            data:page
        })
    }
}