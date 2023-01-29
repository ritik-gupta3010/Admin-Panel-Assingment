import React, { Component } from 'react'
import './Content.css'
import Top from "./top/index"
import Bottom from "./bottom/Bottom"
export class content extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Top/>
          <Bottom/>
        </div>
      </>
    )
  }
}

export default content
