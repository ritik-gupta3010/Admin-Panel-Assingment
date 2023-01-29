import React, { Component } from "react";
import "./Bottom.css";
import Bottomnav from "../Bottomnav";
import BottomData from "../bottomdata/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export class bottom extends Component {
  render() {
    return (
      <>
        <div className="bottom">
          <div className="filter">
            <div className="filterPage">
              <span>Show</span>
              <div>
                <select name="cars" id="cars">
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </div>
              <span>Entries</span>
            </div>
            <div className="filterDate"></div>
          </div>
          <Bottomnav />
          <BottomData />
          <BottomData />
          <div className="pagination">
            <Stack spacing={2} style={{backgroundColor:'#161C32',borderRadius:'15px',margin:'1% 0% 1% 1%'}}>
              <Pagination count={10} color="secondary" />
            </Stack>
          </div>
          
        </div>
      </>
    );
  }
}

export default bottom;
