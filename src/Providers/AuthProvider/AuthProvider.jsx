import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        name: 'Farid',
        signUp
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;