import React, { Component } from 'react'
import { Route,Link } from "react-router-dom";
import Game from './Components/Game'
import Dom from './Components/Dom'

export default class APP extends Component {
    render() {
        return (
            <div>
                <div>选择页面</div>

                <Link to='/game'>game</Link>
                <Link to='/dom' style={{marginLeft:'10px'}}>dom</Link>
                

                <Route  path='/game' component={Game}></Route>
                <Route path='/dom' component={Dom}></Route>
            </div> 
        )
    }
}
