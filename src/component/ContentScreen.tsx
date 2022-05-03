import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './ContentScreen.module.css'
import Navbar from './Navbar'
import Topbar from './Topbar'
import BottomBar from './BottomBar'
import News from './News'
import Home from './Home'
import Projects from './Projects'

interface Props {
    signedIn : boolean;
}

function ContentScreen(props : Props) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const path : { [path: string]: string } = {
        "/":"Home", 
        "/news":"News", 
        "/projects":"Projects", 
        // "/send":"Send", 
        // "/unclaimed":"Links",
    };

    return (
        <div className={styles.height}>
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
                    <Route path="/news" render={(props) => (
                        <News {...props} path="/news.yaml" />
                    )} />
                    <Route path="/projects" render={(props) => (
                        <Projects {...props} path="/projects.yaml" />
                    )} />
                    <Route exact path="/" render={(props) => (
                        <Home {...props} pathNews="/news.yaml" pathProjects="/projects.yaml" />
                    )} />
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
