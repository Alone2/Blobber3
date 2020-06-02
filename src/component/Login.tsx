import React from 'react';

function Login() {
    return (
        <div>
            <form action="login" method="post">
                <input type="text"
                    placeholder="username" />
                <br />
                <input type="password"
                    placeholder="password" />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}

export default Login;
