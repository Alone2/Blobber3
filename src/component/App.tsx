import React from 'react';
import Topbar from './Topbar'
import News from './News'
import Normal from './Normal'
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import ContentScreen from './ContentScreen';

import './App/global.css'

function App() {
  var theme : String;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = "dark"
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = "light"
  } else {
      theme = "dark"
  }
  var themeany : any = Cookies.get('theme')
  if (themeany !== undefined){
    theme = themeany
  }
  if (theme === "light") {
    require("./App/lighttheme.css")
  } else {
    require("./App/darktheme.css")
  }
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/register" exact component={LoginScreen} />
                <Route path="/" component={Normal} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
