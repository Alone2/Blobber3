import React from 'react';
import Topbar from './Topbar'
import News from './News'
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import ContentScreen from './ContentScreen';

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
            <Switch>
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/register" exact component={LoginScreen} />
                <Route path="/" component={Topbar} />
            </Switch>
            <ContentScreen>
              <News />
            </ContentScreen>
        </Router>
    </div>
  );
}

export default App;
