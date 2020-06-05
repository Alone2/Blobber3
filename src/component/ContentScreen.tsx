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
        <Navbar/>
      </div>
      {props.children}
    </div>
  );
}

export default ContentScreen;
