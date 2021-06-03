import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Game from './Components/Game'
import Dom from './Components/Dom'


import { Router,Route,browserHistory} from 'react-router';

ReactDOM.render(
 <Router history={browserHistory}>
   <Route path='/' component={App}>
      <Route path='game' component={Game}></Route>
      <Route path='dom' component={Dom}></Route>
   </Route>
 </Router>
    ,
  document.getElementById('root')
)

