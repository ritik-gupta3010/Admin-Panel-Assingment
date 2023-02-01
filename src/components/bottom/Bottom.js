import React, { Component } from "react";
import "./Bottom.css";
import Bottomnav from "../Bottomnav";
import BottomData from "../bottomdata/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Datepicker from "../datePicker/Datepicker";


export class bottom extends Component {
  handlePageChange=(e,value)=>{
    const {setCurrentPage,fetchBottomData}=this.props;
    setCurrentPage(value)
    fetchBottomData();
    // fetchTopData();
  }
  handlePageLimit=(e)=>{
    const{setDataLimit,fetchBottomData,setCurrentPage}=this.props;
    setDataLimit(e.target.value)
    setCurrentPage(1);
    fetchBottomData();
    // fetchTopData();
  }
  render() {
    const {reduxBottomVar}=this.props;
    console.log()
    const{setDate,fetchBottomData,page,fetchTopData}=this.props;
    console.log(reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].pages)
    console.log(reduxBottomVar)
    return (
      <>
        <div className="bottom">
          <div className="filter">
            <div className="filterPage">
              <div>Show</div>
              <div >
                <select name="" id="" 
                style={{height: '30px'}}
                onChange={(e)=>{this.handlePageLimit(e)}}
                >
                  <option value="10">10</option>
                  <option value="50" selected>50</option>
                  <option value="100">100</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </div>
              <div>Entries</div>
            </div>
            <div className="filterDate">
              <Datepicker 
              setDate={setDate}
              fetchTopData={fetchTopData}
              fetchBottomData={fetchBottomData}
              page={page}
              />
            </div>
          </div>
          <Bottomnav />
          {reduxBottomVar && reduxBottomVar[page] && reduxBottomVar[page].data.length!==0 ? 
           reduxBottomVar && reduxBottomVar[page] && reduxBottomVar[page].data.map((data)=>(<BottomData particularData={data}/>))
           :(<h1 style={{color:'red' ,textAlign:'center',paddingBottom:'20px'}}>No record found</h1>)
          }
          {reduxBottomVar && reduxBottomVar[page] && reduxBottomVar[page].data.length!==0 ?
          (<div className="pagination">
            <Stack
              spacing={2}
              style={{
                backgroundColor: "#161C32",
                borderRadius: "15px",
                margin: "1% 0% 1% 1%",
              }}
            >
              <Pagination 
              count={reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].pages} 
              color="secondary" 
              onChange={(e,value)=>{this.handlePageChange(e,value)}}
              />
            </Stack>
          </div>):null}
        </div>
      </>
    );
  }
}

export default bottom;
