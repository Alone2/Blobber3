import React from 'react';
import Login from './Login'
import Register from './Register'
import logo from '../assets/logo.svg'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from './LoginScreen.module.css'

function LoginScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.banner}>
        <Link to="/login">
          <img alt="blobber logo" draggable="false" src={logo} className={styles.bannerlogo} />
        </Link>
      </div>
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </Router>
    </div>
  );
}

export default LoginScreen;