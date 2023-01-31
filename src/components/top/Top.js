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
            {/* <div style={{display:'flex',justifyContent:'space-evenly',paddingBottom:'3%'}}>
                <div className="item">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon 
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.totalInstall}</div>
                        <div>App Installed</div>
                    </div>
                </div>
                <div className="item">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.activeinstall}</div>
                        <div>Active Installs</div>
                    </div>
                </div>
                <div className="item">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.churn}</div>
                        <div>Churn Rate</div>
                    </div>
                </div>
            </div> */}
            {/* <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div className="item1">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon 
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.totaluninstall}</div>
                        <div>App Un-Installed</div>
                    </div>
                </div>
                <div className="item1">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.aliveappusers}</div>
                        <div>Alive App Users</div>
                    </div>
                </div>
                <div className="item1">
                    <div className='iconStyle'>
                        <FileDownloadOutlinedIcon
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            padding: '25%'
                        }}/>
                    </div>
                    <div style={{color: 'white'}}>
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.alivechurn}</div>
                        <div>Alive Churn Rate</div>
                    </div>
                </div>
            </div> */}
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.totalInstall}</div>
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.totaluninstall}</div>
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.activeinstall}</div>
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.aliveappusers}</div>
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.churn}%</div>
                        
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
                        <div>{reduxTopVar && reduxTopVar.data && reduxTopVar.data.alivechurn}%</div>
                        <div>Alive Churn Rate</div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
