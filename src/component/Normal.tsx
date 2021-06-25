import React from 'react';
import ContentScreen from './ContentScreen'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from './News'
import Topbar from './Topbar'
import styles from './Normal.module.css';

interface Props {
}

function Normal(props : Props) {
  return (
    <div>
        <div className={styles.banner}>
            <Topbar/>
        </div>
        <div className={styles.content}>
            <ContentScreen>
                <News/>
            </ContentScreen>
        </div>
    </div>
  );
}

export default Normal;
