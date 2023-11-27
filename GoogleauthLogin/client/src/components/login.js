import { GoogleLogin } from "@react-oauth/google";

const clientId = "308509529724-hd6dbqn56df8m4jlsao3s1mb9qh5uov1.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user:",res.profileObj);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:",res);
    } 
    return(
        <div id="signInButton">
            <GoogleLogin 
            clientId = {clientId}
            buttonText = "Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}/>
        </div>

    )
}
export default Login;