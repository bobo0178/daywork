import React, { Component } from 'react'
import {Link} from 'react-router'
export default class Home extends Component {
    
    componentDidMount() {
        this.props.router.setRouteLeaveHook(
          this.props.route, 
          this.routerWillLeave
        )
      }
    
      routerWillLeave(nextLocation){
        return '离开?'
      }

    render() {
        return (
            <div>
                home
                <br/>
                <Link to='/message/25'>Message</Link>
                <br/>
                {this.props.children}
            </div>
        )
    }
}
