import React from 'react';
import Login from './Login'
import Topbar from './Topbar'
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentHolder from './ContentHolder';

import './colors.css'

function App() {
  var themeany : any = Cookies.get('theme')
  var theme : String;
  if (themeany === undefined){
    theme = "dark"
    Cookies.set("theme", theme)
  } else {
    theme = themeany
  }
  if (theme === "white") {
    require("colors.css")
  } else {
    require("colors.css")
  }
  return (
    <div className="App">
        <Router>
            <Route path="/" component={Topbar} />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
            <ContentHolder />
        </Router>
    </div>
  );
}

export default App;
