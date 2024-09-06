import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import googleIcon from "../../assets/google_icon.png"

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                alert("User signIn successfully")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <button onClick={handleGSignIn} className="btn btn-outline w-full"><img width={30} src={googleIcon} alt="" /> Google</button>
        </div>
    );
};

export default GoogleLogin;