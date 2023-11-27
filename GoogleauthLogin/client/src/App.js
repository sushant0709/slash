import logo from './logo.svg';
import React from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';

const clientId = "308509529724-bhg9jmilhmjo7ufre72eeld33gg1lm6n.apps.googleusercontent.com";


function App() {

    const responseMessage = (response) => {
      console.log("LOGIN SUCCESS!");
  // Assuming the route in App2 is defined as '/home' in your React Router setup
  window.location.href = 'https://slash-qn6c.onrender.com/';
      
    };
    const errorMessage = (error) => {
      console.log(error);
    };
  return (
    <div style={{ backgroundColor: '#4054B4', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'center', padding: '100px', width: '100%' }}>
        <h2 style={{ fontSize: '6em', color: 'white', margin: '0', marginBottom: '200px' }}>Slash</h2>
        <br />
        <br />
        <center>
        <GoogleLogin
        theme = 'outline' 
        size = 'large'
        shape = 'pill'
        width = '300px'
        logo_alignment = 'center'
        onSuccess={responseMessage} onError={errorMessage} />
        </center>
      </div>
    </div>
  );
}

export default App;
