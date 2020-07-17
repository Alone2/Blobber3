import React from 'react';
import styles from './Login.module.css'
import Content from './Content';
import { Link } from "react-router-dom";

function Login() {
    return (
        <Content>
            <div className={styles.login}>
                <form action="login" method="post">
                    <input type="text"
                        placeholder="username" />
                    <br />
                    <br />
                    <input type="password"
                        placeholder="password" />
                    <br />
                    <br />
                    <Link className={styles.linkclass} to="/register">
                    <button className={styles.registerbutton} value="register" >register</button>
                    </Link>
                    <button className={styles.loginbutton} type="submit" value="login" >login</button>
                </form>
            </div>
        </Content>
    );
}

export default Login;
