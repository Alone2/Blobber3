import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './ContentScreen.module.css'
import Navbar from './Navbar'
import Topbar from './Topbar'
import BottomBar from './BottomBar'
import News from './News'

interface Props {
    signedIn : boolean;
}

function ContentScreen(props : Props) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const path : { [path: string]: string } = {
        "/":"Home", 
        "/news":"News", 
        "/send":"Send", 
        "/unclaimed":"Links",
    };

    return (
        <div>
            <div className={isMobile ? [styles.bannermobile,styles.banner].join(" ") : styles.banner}>
                <Topbar/>
            </div>
            <div className={isMobile ? [styles.contentmobile,styles.content].join(" ") : styles.content}>
                { isMobile ? "" :
                <div className={styles.navbar}>
                    <Navbar paths={path} />
                </div>
                }
                <div className={isMobile ? styles.childrenmobile : styles.children}>
                    <Route path="/news" component={News} />
                </div>
            </div>
            { isMobile ? 
            <div className={styles.bottombar}>
                <BottomBar paths={path} />
            </div>
            : ""}
        </div>
    );
}

export default ContentScreen;
