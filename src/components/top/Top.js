import React, { Component } from 'react'
import './Top.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

export default class top extends Component {
    componentDidMount(){
        const {fetchTopData}=this.props;
        fetchTopData();
    }
    render() {
    const {reduxTopVar}=this.props;
    // console.log(reduxTopVar);
    // console.log("top ",reduxTopVar.data);
    return (
      <>
        <div className="top">
           
           
            <div className="container">
                <div className="item1">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon 
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.totalInstall:0}</div>
                        <div>App Installed</div>
                    </div>
                </div>
                <div className="item2">
                    <div className='iconStyle'>
                        <CancelPresentationIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.totaluninstall:0}</div>
                        <div>App Un-Installed</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="item1">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.activeinstall:0}</div>
                        <div>Active Installs</div>
                    </div>
                </div>
                <div className="item2">
                <div className='iconStyle'>
                        <AccountCircleOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.aliveappusers:0}</div>
                        <div>Alive App Users</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="item1">
                    <div className='iconStyle'>
                        <TrendingUpOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.churn:0}%</div>
                        
                        <div>Churn Rate</div>
                    </div>
                </div>
                <div className="item2">
                    <div className='iconStyle'>
                        <TrendingUpOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white',marginLeft: '10px'}}>
                        <div>{reduxTopVar && reduxTopVar.data ? reduxTopVar.data.alivechurn:0}%</div>
                        <div>Alive Churn Rate</div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
