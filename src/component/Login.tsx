import React from 'react';
import './Login.css'

function Login() {
    return (
        <div>
            <form action="login" method="post">
                <input type="text"
                    placeholder="username" />
                <br />
                <br />
                <input type="password"
                    placeholder="password" />
                <br />
                <br />
                <button className="logincontentbutton" type="submit" value="login" >login</button>
            </form>
        </div>
    );
}

export default Login;
