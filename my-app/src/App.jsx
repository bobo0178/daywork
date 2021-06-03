import React, { Component } from 'react'
import { Link} from "react-router";
import './App.css'

export default class APP extends Component {
    render() {
        return (
            <div>
                <div>选择页面</div>

                <Link to='/game' className='link' activeClassName="active">game</Link>
                <Link to='/dom' className='link' activeClassName="active">dom</Link>
                
                {this.props.children}
                
            </div> 
        )
    }
}
