import React, { Component } from 'react'
import './Home.css'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
            <Sidebar/>
            <Content/>
        </div>
      </>
    )
  }
}
