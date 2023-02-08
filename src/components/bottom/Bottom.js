import React, { Component } from "react";
import "./Bottom.css";
import Bottomnav from "../Bottomnav";
import BottomData from "../bottomdata/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Datepicker from "../datePicker/Datepicker";

import { withStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   ul: {
//     "& .MuiPaginationItem-root": {
//       color: "#fff"
//     }
//   }
// }));
const styles = theme => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "white"
    }
  }
});
export class bottom extends Component {
  componentDidMount(){
    const {fetchBottomData}=this.props;
    
    fetchBottomData();
}
  handlePageChange=(e,value)=>{
    const {setCurrentPage,fetchBottomData}=this.props;
    console.log("in bottom page",value)
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
    // console.log("from redux",reduxBottomVar)
    const{setDate,fetchBottomData,page,fetchTopData}=this.props;
    // console.log(reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].pages)
    // console.log(reduxBottomVar)
    // const classes = useStyles();
    const { classes } = this.props;
    
    return (
      <>
        <div className="bottom">
          <div className="filter">
            <div className="filterPage">
              <div>Show</div>
              <div >
                <select name="" id="" 
                style={{height: '30px',color:"white",backgroundColor: "#283046"}}
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
            <br/>
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
          {reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data.length!==0 ? 
           reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data.map((data)=>(<BottomData particularData={data}/>))
           :(<h1 style={{color:'red' ,textAlign:'center',paddingBottom:'20px'}}>No record found</h1>)
          }
          {reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data.length!==0 ?
          (<div className="pagination">
            <Stack
              spacing={2}
              style={{
                backgroundColor: "#161C32",
                borderRadius: "15px",
                margin: "1% 0% 1% 1%",
                color:"white"
              }}
            >
              <Pagination 
              count={reduxBottomVar.pages} 
              color="secondary" 
              onChange={(e,value)=>{this.handlePageChange(e,value)}}
              style={{text:{color:"white"}}}
              // sx={{ cursor: "pointer", color: "red" }}
              className={classes.ul}
              />
            </Stack>
          </div>):null}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(bottom);
