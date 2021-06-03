import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './App';

import About from './Components/About'
import Home from './Components/Home'
import Message from './Components/Message'
import General from './Components/General'


ReactDOM.render(
    <Router  history={browserHistory}>
      <Route  path='/' component={App}>
        <IndexRoute component={General}></IndexRoute>
        <Route path='about' component={About} />
        <Route path='home' component={Home} onEnter={() => {alert('进入');}}>
          <Route path='/message/:id' component={Message} ></Route>
          <Redirect from='message/:id' to='/message/:id' />
        </Route>
      </Route>
    </Router>,
  document.getElementById('root')
);
