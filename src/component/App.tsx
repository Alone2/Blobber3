import React from 'react';
import Login from './Login'
import Topbar from './Topbar'
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from './Content';

import './App/global.css'

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
    require("./App/lighttheme.css")
  } else {
    require("./App/darktheme.css")
  }
  return (
    <div className="App">
        <Router>
            <Route path="/" component={Topbar} />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
            <Content>
              <Login />
            </Content>
        </Router>
    </div>
  );
}

export default App;
