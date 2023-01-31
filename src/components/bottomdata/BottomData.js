import React, { Component } from 'react'
import './BottomeData.css'

import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import moment from 'moment';
export class BottomData extends Component {
    componentDidMount(){
        const {fetchBottomData,page}=this.props;
        fetchBottomData(page);
    }
  render() {
    const {reduxBottomVar,page}=this.props;
    
    // console.log(reduxBottomVar)
    // console.log(reduxBottomVar.data)
    // reduxBottomVar.data && console.log(reduxBottomVar.data.current)
    // reduxBottomVar.data && console.log(reduxBottomVar.data.data)
    // reduxBottomVar.data && console.log(reduxBottomVar.data['data'])
    // reduxBottomVar.data && console.log(reduxBottomVar.data['data'][page].ios_install)
    

    // console.log(date.toDateString());
    
    return (
      <div>
        {reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data.length?
        <div>
            <div className='bottomData'>
            <div className="data">{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && moment.utc(reduxBottomVar[page].data[0].created_At).format("DD MMM YYYY")}</div>
            <div className="data">{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].totalinstall ?reduxBottomVar[page].data[0].totalinstall :0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <div>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].android_install ? reduxBottomVar[page].data[0].android_install :0}</div>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].ios_install ?reduxBottomVar[page].data[0].ios_install :0}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].totaluninstall?reduxBottomVar[page].data[0].totaluninstall:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].android_uninstall?reduxBottomVar[page].data[0].android_uninstall:0}</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].ios_uninstall ?reduxBottomVar[page].data[0].ios_uninstall:0}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].totalchurn ?reduxBottomVar[page].data[0].totalchurn:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].android_churn ?reduxBottomVar[page].data[0].android_churn:0}%</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[page] &&reduxBottomVar[page].data && reduxBottomVar[page].data[0].ios_churn ?reduxBottomVar[page].data[0].ios_churn:0}%</span>
                </div>
            </div>
        </div>
        <div className="line"></div>
        </div>
        :
        <div>No Data Found</div>}
      </div>
    )
  }
}

export default BottomData
