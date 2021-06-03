import React, { Component } from 'react'
import {browserHistory} from 'react-router'

export default class Message extends Component {
    handleClick=() => {
        browserHistory.push('/about')
    }
    render() {
        return (
            <div>
                <div>
                    收到参数：{this.props.params.id}
                </div>
                <br/>
                <button onClick={this.handleClick}>跳转about</button>
            </div>
        )
    }
}
