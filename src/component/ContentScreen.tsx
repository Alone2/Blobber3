import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './ContentScreen.module.css'
import Navbar from './Navbar'
import Topbar from './Topbar'
import News from './News'

interface Props {
    signedIn : boolean;
}

function ContentScreen(props : Props) {
    return (
        <div>
            <div className={styles.banner}>
                <Topbar/>
            </div>
            <div className={styles.content}>
                <div className={styles.navbar}>
                    <Navbar paths={
                        {
                            "/":"Home", 
                            "/news":"News", 
                            "/send":"Send", 
                            "/unclaimed":"Links" 
                        }
                    }/>
                </div>
                <div className={styles.children}>
                    <Route path="/news" component={News} />
                </div>
            </div>
        </div>
    );
}

export default ContentScreen;
