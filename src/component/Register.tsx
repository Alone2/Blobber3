import React from 'react';
import styles from './Login.module.css'
import Content from './Content';
import { Link } from "react-router-dom";

function Register() {
    return (
        <Content>
            <div className={styles.login}>
                <form action="./register" method="post">
                    <span id="inputdescription">e-mail</span>
                    <input type="email"
                        placeholder="" autoFocus/>
                    <br />
                    <br />
                    <span id="inputdescription">username</span>
                    <input type="text"
                        placeholder="" />
                    <br />
                    <br />
                    <span id="inputdescription">password</span>
                    <input type="password"
                        placeholder="" />
                    <br />
                    <br />
                    <span id="inputdescription">confirm password</span>
                    <input type="password"
                        placeholder="" />
                    <br />
                    <br />
                    <button className={styles.loginbutton} type="submit" value="login" >register</button>
                    <Link className={styles.linkclass} to="/login">
                        <button className={styles.registerbutton} value="register" >login</button>
                    </Link>
                </form>
            </div>
        </Content>
    );
}

export default Register;
