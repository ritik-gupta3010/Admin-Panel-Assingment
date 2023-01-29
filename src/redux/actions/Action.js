import axios from 'axios';

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
    const{limit}=getState();
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
    // console.log(limit)
    return dispatch=>{
        dispatch({
            type:'SET_DATA_LIMIT',
            data:limit
        })
    }
}
export const setStartDate=(startDate)=>{
    return dispatch=>{
        dispatch({
            type:'SET_START_DATE',
            data:startDate
        })
    }
}
export const setEndDate=(endDate)=>{
    return dispatch=>{
        dispatch({
            type:'SET_END_DATE',
            data:endDate
        })
    }
}