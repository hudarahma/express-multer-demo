

import React, { useRef } from 'react'
import { useHistory } from 'react-router';

function Login() {
    const history = useHistory();
    // Check for userID.
    const emailRef = useRef();
    const passwordRef = useRef();

    // Login user if not logged in

    const handelLogin = async () => {
        const res = await fetch('http://localhost:3002/api/v1/users', {
            method: "POST",
            headers: {
                'content-type': 'Application/JSON',
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }),
        });

        const data = res.json();
        console.log(data);
        sessionStorage.setItem('token', JSON.stringify({ token: data.token }));
        history.push('/');
    };


    return (
        <div>
            <input type='text' placeholder='email' />
            <br />
            <input type='text' placeholder='password' />
            <br /><button onClick={() => handelLogin()}>Submit</button>

        </div>
    )
}

export default Login
