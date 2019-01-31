import React, { Component } from 'react';

import './App.css';
//引入路由依赖
import { BrowserRouter as Router, Route } from "react-router-dom";
//开始引入页面js
import Login from './pages/user/login'
import Register from './pages/user/Register'
import RegisterResult from './pages/user/RegisterResult'

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>  
             <div className="page">
             <Route exact path="/user" component={Login} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/user/register-result" component={RegisterResult} />
               </div> 
            
               
          
          </Router>

     </div>

    );
  }
}

export default App;