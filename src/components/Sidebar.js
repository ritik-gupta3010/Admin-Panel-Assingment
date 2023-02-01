import React, { Component } from "react";
import "./Sidebar.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DiamondIcon from "@mui/icons-material/Diamond";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";


export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      mobileOpen: false,
      drawerWidth: 240,
    };
  }
  
  handleDrawerToggle = () => {
    // alert("open")
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    return (
      <div>
        <div className="sidebar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            sx={{ display: { md: "none" }, ml: "0px" }}
          >
            <MenuIcon />
          </IconButton>
          {this.state.mobileOpen === false ? (
            <div className="sidebar1">
              <ul className="list">
                <li className="listItem">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <DiamondIcon style={{ fontSize: "xx-large" }} />
                    <div
                      className="listPaddingLeft"
                      style={{ color: "blue", fontSize: "large" }}
                    >
                      WOW
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", marginRight: "0" }}>
                    <PanoramaFishEyeIcon />
                  </div>
                </li>
                <li
                  className="listItem"
                  style={{ backgroundColor: "blue", borderRadius: "5px" }}
                >
                  <DragHandleIcon />
                  <div className="listPaddingLeft">DashBoard</div>
                </li>
                <li className="listItem">
                  <PermIdentityIcon />
                  <div className="listPaddingLeft">WOW users</div>
                </li>
                <li className="listItem">
                  <VideocamOutlinedIcon />
                  <div className="listPaddingLeft">Video Clips</div>
                </li>
                <li className="listItem">
                  <ReportProblemOutlinedIcon />
                  <div className="listPaddingLeft">Reported Conted</div>
                </li>
                <li className="listItem">
                  <LayersOutlinedIcon />
                  <div className="listPaddingLeft">Category</div>
                </li>
                <li className="listItem">
                  <ReportGmailerrorredOutlinedIcon />
                  <div className="listPaddingLeft">Info Page</div>
                </li>
                <li className="listItem">
                  <FlashOnOutlinedIcon />
                  <div className="listPaddingLeft">FAQ</div>
                </li>
                <li className="listItem">
                  <NotificationsNoneOutlinedIcon />
                  <div className="listPaddingLeft">Push Notification</div>
                </li>
                <li className="listItem">
                  <PersonAddAltOutlinedIcon />
                  <div className="listPaddingLeft">Internal user</div>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <Box component="nav">
          <Drawer
            // container={container}
            // variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            // ModalProps={{
            //   keepMounted: true, // Better open performance on mobile.
            // }}
            sx={{
              zIndex: "6000",
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: this.state.drawerWidth,
              },
            }}
          >
            <Box
              onClick={this.handleDrawerToggle}
              sx={{ textAlign: "center" }}
            >
              
              <ul className="list" style={{backgroundColor: '#283046',marginTop:'0px',marginBottom:'0px'}}>
                <li className="listItem">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <DiamondIcon style={{ fontSize: "xx-large" }} />
                    <div
                      className="listPaddingLeft"
                      style={{ color: "blue", fontSize: "large" }}
                    >
                      WOW
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", marginRight: "0" }}>
                    <PanoramaFishEyeIcon />
                  </div>
                </li>
                <li
                  className="listItem"
                  style={{ backgroundColor: "blue", borderRadius: "5px" }}
                >
                  <DragHandleIcon />
                  <div className="listPaddingLeft">DashBoard</div>
                </li>
                <li className="listItem">
                  <PermIdentityIcon />
                  <div className="listPaddingLeft">WOW users</div>
                </li>
                <li className="listItem">
                  <VideocamOutlinedIcon />
                  <div className="listPaddingLeft">Video Clips</div>
                </li>
                <li className="listItem">
                  <ReportProblemOutlinedIcon />
                  <div className="listPaddingLeft">Reported Conted</div>
                </li>
                <li className="listItem">
                  <LayersOutlinedIcon />
                  <div className="listPaddingLeft">Category</div>
                </li>
                <li className="listItem">
                  <ReportGmailerrorredOutlinedIcon />
                  <div className="listPaddingLeft">Info Page</div>
                </li>
                <li className="listItem">
                  <FlashOnOutlinedIcon />
                  <div className="listPaddingLeft">FAQ</div>
                </li>
                <li className="listItem">
                  <NotificationsNoneOutlinedIcon />
                  <div className="listPaddingLeft">Push Notification</div>
                </li>
                <li className="listItem">
                  <PersonAddAltOutlinedIcon />
                  <div className="listPaddingLeft">Internal user</div>
                </li>
              </ul>
            </Box>
          </Drawer>
        </Box>
      </div>
    );
  }
}

export default Sidebar;
