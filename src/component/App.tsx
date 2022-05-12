import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import ContentScreen from './ContentScreen';
import getTheme from '../logic/getTheme';

import './App/global.css'

const LightTheme = React.lazy(() => import('./App/LightTheme'));
const DarkTheme = React.lazy(() => import('./App/DarkTheme'));

function App() {
  var theme = getTheme();
  if (theme === "light") {
    require("./App/lighttheme.css")
  } else {
    require("./App/darktheme.css")
  }
  return (
    <div className="App">
        <React.Suspense fallback={<></>}>
            {theme === "light" ? <LightTheme/> : <DarkTheme/>}
        </React.Suspense>
        <Router>
            <Switch>
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/register" exact component={LoginScreen} />
                <Route path="/" component={ContentScreen} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
