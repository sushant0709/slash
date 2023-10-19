import React, { useEffect,useState} from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut} from 'firebase/auth';
import Random from '../components/auth/Random';


const AuthDetails = () => {
    const [authUser,setAuthUser]= useState(null);
    useEffect(()=>{
        const listen= onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)

            }else{
                setAuthUser(null);
            }
        })
        return () =>{
            listen();
        }
    },[]);
    const userSignOut =() =>{
        signOut(auth).then(()=>{
            console.log("sign out was successful")
        }).catch(error=> console.log(error))

    }
  return (
    <div>
        {
        authUser?
        <div>
        <Random/> 
        <button onClick={userSignOut}>Sign Out</button></div>
        :<p>Signed Out</p>
        } 
    </div>
  )
}

export default AuthDetails