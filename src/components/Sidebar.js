import React, { Component } from 'react'
import './Sidebar.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export class Sidebar extends Component {
  render() {
    return (
      <>
      <div className="sidebar">
        <ul className="list">
          <li className="listItem" style={{backgroundColor:"blue",borderRadius:'5px'}}><DragHandleIcon/><div className='listPaddingLeft'>DashBoard</div></li>
          <li className="listItem"><PermIdentityIcon/><div className='listPaddingLeft'>WOW users</div></li>
          <li className="listItem"><VideocamOutlinedIcon/><div className='listPaddingLeft'>Video Clips</div></li>
          <li className="listItem"><ReportProblemOutlinedIcon/><div className='listPaddingLeft'>Reported Conted</div></li>
          <li className="listItem"><LayersOutlinedIcon/><div className='listPaddingLeft'>Category</div></li>
          <li className="listItem"><ReportGmailerrorredOutlinedIcon/><div className='listPaddingLeft'>Info Page</div></li>
          <li className="listItem"><FlashOnOutlinedIcon/><div className='listPaddingLeft'>FAQ</div></li>
          <li className="listItem"><NotificationsNoneOutlinedIcon/><div className='listPaddingLeft'>Push Notification</div></li>
          <li className="listItem"><PersonAddAltOutlinedIcon/><div className='listPaddingLeft'>Internal user</div></li>
        </ul>
      </div>
    </>
    )
  }
}

export default Sidebar
