import React, { Component } from 'react'
import './BottomeData.css'

import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import moment from 'moment';
export class BottomData extends Component {
  render() {
    const {reduxBottomVar}=this.props;
    const{particularData}=this.props;
    console.log(this.props.particularData)
    console.log(reduxBottomVar)
    // console.log(reduxBottomVar.data)
    // reduxBottomVar.data && console.log(reduxBottomVar.data.current)
    // reduxBottomVar.data && console.log(reduxBottomVar.data.data)
    // reduxBottomVar.data && console.log(reduxBottomVar.data['data'])
    // reduxBottomVar.data && console.log(reduxBottomVar.data['data'][page].ios_install)
    

    // console.log(date.toDateString());
    
    return (
      <>
        <div>
            <div className='bottomData'>
            <div className="data">{particularData && particularData.created_At ? moment(particularData.created_At).format("DD MMM YYYY"):0}</div>
            <div className="data">{particularData && particularData.totalinstall ?particularData.totalinstall :0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <div>{particularData && particularData.android_install ? particularData.android_install :0}</div>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{particularData && particularData.ios_install ?particularData.ios_install :0}</span>
                </div>
            </div>
            <div className="data">{particularData && particularData.totaluninstall?particularData.totaluninstall:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{particularData && particularData.android_uninstall?particularData.android_uninstall:0}</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{particularData && particularData.ios_uninstall ?particularData.ios_uninstall:0}</span>
                </div>
            </div>
            <div className="data">{particularData && particularData.totalchurn ?particularData.totalchurn:0}</div>
            <div className="data">
                <div className="row">
                    <AdbOutlinedIcon/>
                    <span>{particularData && particularData.android_churn ?particularData.android_churn:0}%</span>
                </div>
                <div className="row">
                    <AppleIcon/>
                    <span>{particularData && particularData.ios_churn ?particularData.ios_churn:0}%</span>
                </div>
            </div>
            </div>
            <div className="line"></div>
        </div>
        
      </>
    )
  }
}

export default BottomData
