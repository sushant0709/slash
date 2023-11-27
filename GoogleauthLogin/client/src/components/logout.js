import { GoogleLogin } from "@react-oauth/google";

const clientId = "308509529724-hd6dbqn56df8m4jlsao3s1mb9qh5uov1.apps.googleusercontent.com";

function Logout(){

    const onSuccess = (res) => {
        console.log("LOGOUT SUCCESS!");
    }
    
    return(
        <div id="signOutButton">
            <GoogleLogin 
            clientId = {clientId}
            buttonText = {"Logout"}
            onSuccess={onSuccess}
            />
        </div>

    )
}
export default Logout;