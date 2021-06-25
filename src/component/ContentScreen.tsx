import React from 'react';
import Login from './Login'
import Register from './Register'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './ContentScreen.module.css'
import Navbar from './Navbar'

// import styles from './LoginScreen.module.css'
interface Props {
  children: React.ReactNode;
}

function ContentScreen(props : Props) {
  return (
    <div>
      <div className={styles.navbar}>
        <Route path="/" component={Navbar} />
        <Route path="/news" component={Navbar} />
        <Route path="/send" component={Navbar} />
        <Route path="/unclaimed" component={Navbar} />
      </div>
      <div className={styles.children}>
          {props.children}
      </div>
    </div>
  );
}

export default ContentScreen;
