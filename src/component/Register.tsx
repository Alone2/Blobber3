import React from 'react';
import styles from './Login.module.css'
import Content from './Content';

function Register() {
    return (
        <Content>
            <div className={styles.login}>
                <form action="login" method="post">
                    <input type="email"
                        placeholder="email" />
                    <br />
                    <br />
                    <input type="text"
                        placeholder="username" />
                    <br />
                    <br />
                    <input type="password"
                        placeholder="password" />
                    <br />
                    <br />
                    <input type="password"
                        placeholder="confirm password" />
                    <br />
                    <br />
                    <button className={styles.loginbutton} type="submit" value="login" >register</button>
                </form>
            </div>
        </Content>
    );
}

export default Register;
