import React, { Component } from "react";
import "./Bottom.css";
import Bottomnav from "../Bottomnav";
import BottomData from "../bottomdata/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Datepicker from "../datePicker/Datepicker";
// import { setDataLimit } from "../../redux/actions/Action";
export class bottom extends Component {
  handlePageChange=(e,value)=>{
    const{page}=this.props;
    this.props.setCurrentPage(value)
    this.props.fetchBottomData(page);
  }
  render() {
    const {reduxBottomVar}=this.props;
    console.log(reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].pages)
    return (
      <>
        <div className="bottom">
          <div className="filter">
            <div className="filterPage">
              <div>Show</div>
              <div >
                <select name="" id="" 
                style={{height: '30px'}}
                onChange={(e)=>{this.props.setDataLimit(e.target.value)}}
                >
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </div>
              <div>Entries</div>
            </div>
            <div className="filterDate">
              <Datepicker 
              setDate={this.props.setDate}
              fetchData={this.props.fetchBottomData}
              page={this.props.page}
              />
            </div>
          </div>
          <Bottomnav />
          <BottomData />
          
          <div className="pagination">
            <Stack
              spacing={2}
              style={{
                backgroundColor: "#161C32",
                borderRadius: "15px",
                margin: "1% 0% 1% 1%",
              }}
            >
              <Pagination 
              count={reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].pages} 
              color="secondary" 
              onChange={()=>{this.handlePageChange()}}
              />
            </Stack>
          </div>
        </div>
      </>
    );
  }
}

export default bottom;
