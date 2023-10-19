import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) =>
                console.log(error));

    };
    return (
        <div className='Sign-in-container'>
            <form onSubmit={SignUp}>
                <h1>Create Account</h1>
                <input type='email' placeholder='Enter your Email here' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp