import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const AppContext = createContext();
export const useAppContext = () => {
    return useContext(AppContext);
};
export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [appState, setaAppState] = useState("empty");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setaAppState("home");
                setCurrentUser(user);
                console.log("user", user);

                // ...
            } else {
                setCurrentUser(null);
                setaAppState("login");
            }
        });
    }, []);
    const value = { appState, currentUser };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
