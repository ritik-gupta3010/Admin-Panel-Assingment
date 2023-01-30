import React, { Component } from 'react'
import './BottomeData.css'

import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import moment from 'moment';
export class BottomData extends Component {
    componentDidMount(){
        const {fetchBottomData}=this.props;
        fetchBottomData(1);
    }
  render() {
    const {reduxBottomVar}=this.props;
    
    console.log(reduxBottomVar)
    console.log(reduxBottomVar.data)
    reduxBottomVar.data && console.log(reduxBottomVar.data.current)
    // reduxBottomVar.data && console.log(reduxBottomVar.data.data)
    reduxBottomVar.data && console.log(reduxBottomVar.data['data'])
    reduxBottomVar.data && console.log(reduxBottomVar.data['data'][1].ios_install)
    

    // console.log(date.toDateString());
    
    return (
      <>
        <div className='bottomData'>
            <div className="data">{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && moment.utc(reduxBottomVar[1].data[0].created_At).format("DD MMM YYYY")}</div>
            <div className="data">{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].totalinstall ?reduxBottomVar[1].data[0].totalinstall :0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <div>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].android_install ? reduxBottomVar[1].data[0].android_install :0}</div>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].ios_install ?reduxBottomVar[1].data[0].ios_install :0}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].totaluninstall?reduxBottomVar[1].data[0].totaluninstall:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].android_uninstall?reduxBottomVar[1].data[0].android_uninstall:0}</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].ios_uninstall ?reduxBottomVar[1].data[0].ios_uninstall:0}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].totalchurn ?reduxBottomVar[1].data[0].totalchurn:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].android_churn ?reduxBottomVar[1].data[0].android_churn:0}%</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar[1] &&reduxBottomVar[1].data && reduxBottomVar[1].data[0].ios_churn ?reduxBottomVar[1].data[0].ios_churn:0}%</span>
                </div>
            </div>
        </div>
        <div className="line"></div>
      </>
    )
  }
}

export default BottomData
