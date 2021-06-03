import React, { Component } from 'react'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to='/about'>About</Link>
        <Link to='/home' style={{marginLeft:"20px"}}>Home</Link>
        {this.props.children}
      </div>
    )
  }
}

