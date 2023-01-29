import React, { Component } from 'react'
import './Bottomnav.css'
export class Bottomnav extends Component {
  render() {
    return (
      <>
        <div className="nav">
            <div className="navItem1">Date</div>
            <div className="navItem2">Day Installs</div>
            <div className="navItem">Plateform</div>
            <div className="navItem">Day Un-Installs</div>
            <div className="navItem">Plateform</div>
            <div className="navItem">Churn Rate</div>
            <div className="navItem">Churn Plateform</div>
        </div>
      </>
    )
  }
}

export default Bottomnav
