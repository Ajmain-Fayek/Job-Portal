import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const clear = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Sate captured", currentUser);
            setLoading(false);
        });
        return clear();
    }, []);

    const authInfo = { user, loading, register, login };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
