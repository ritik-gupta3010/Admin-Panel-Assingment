import React, { Component } from 'react'
import './BottomeData.css'

import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import moment from 'moment';
export class BottomData extends Component {
    componentDidMount(){
        const {fetchBottomData}=this.props;
        fetchBottomData();
    }
  render() {
    const {reduxBottomVar}=this.props;
    console.log(reduxBottomVar)
    console.log(reduxBottomVar.data)
    reduxBottomVar.data && console.log(reduxBottomVar.data.current)
    reduxBottomVar.data && console.log(reduxBottomVar.data['data'])
    reduxBottomVar.data && console.log(reduxBottomVar.data['data'][1].ios_install)
    

    // console.log(date.toDateString());
    
    return (
      <>
        <div className='bottomData'>
            <div className="date">{reduxBottomVar && reduxBottomVar.data && moment.utc(reduxBottomVar.data['data'][1].created_At).format("DD MMM YYYY")}</div>
            <div className="data">{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].totalinstall}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <div>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].android_install}</div>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].ios_install}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].totaluninstall}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].android_uninstall}</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].ios_uninstall}</span>
                </div>
            </div>
            <div className="data">{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].totalchurn}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].android_churn}%</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{reduxBottomVar && reduxBottomVar.data && reduxBottomVar.data['data'][1].ios_churn}%</span>
                </div>
            </div>
        </div>
        <div className="line"></div>
      </>
    )
  }
}

export default BottomData
