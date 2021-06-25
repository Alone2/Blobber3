import React from 'react';
import styles from './Login.module.css'
import Content from './Content';
import { Link } from "react-router-dom";

function Login() {
    return (
        <Content>
            <div className={styles.login}>
                <form action="login" method="post">
                    <span id="inputdescription">username</span>
                    <input type="text"
                        placeholder="your username" />
                    <br />
                    <br />
                    <span id="inputdescription">password</span>
                    <input type="password"
                        placeholder="yourstrongpassword123" />
                    <br />
                    <br />
                    <button className={styles.loginbutton} type="submit" value="login" >login</button>
                    <Link className={styles.linkclass} to="/register">
                        <button className={styles.registerbutton} value="register" >register</button>
                    </Link>
                </form>
            </div>
        </Content>
    );
}

export default Login;
