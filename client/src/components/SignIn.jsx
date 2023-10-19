import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';


const submitButton = document.getElementById('submitButton')

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential", userCredential.user)
                if (userCredential.user) {
                    navigate('/random')
                }
                else {
                    navigate('/signIn')
                }

            }).catch((error) =>
                console.log(error));
    };

    // console.log("redirect",redirect)
    return (
        <div className='Sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log in to your Account</h1>
                <input type='email' placeholder='Enter your Email here' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Login</button>
                {/* <Link  onClick={()=>signIn()} to={`${redirect ? `/random` : `/signIn`}`}>Login</Link> */}
            </form>
            {/* <Link to={`/random`}>Your Name</Link> */}

        </div>
    )
}

export default SignIn