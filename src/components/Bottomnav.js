import React, { Component } from 'react'
import './Bottomnav.css'
export class Bottomnav extends Component {
  render() {
    return (
      <>
        <ul className="nav">
            <li className="navItem">Date</li>
            <li className="navItem">Day Installs</li>
            <li className="navItem">Plateform</li>
            <li className="navItem">Day Un-Installs</li>
            <li className="navItem">Plateform</li>
            <li className="navItem">Churn Rate</li>
            <li className="navItem">Churn Plateform</li>
        </ul>
      </>
    )
  }
}

export default Bottomnav
