import { onAuthStateChanged } from "firebase/auth";
import {
    collection,
    CollectionReference,
    getDocs,
    onSnapshot,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";

const AppContext = createContext();
export const useAppContext = () => {
    return useContext(AppContext);
};
export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [appState, setaAppState] = useState("empty");
    const [videos, setVideos] = useState([]);
    const [showUploadVideo, setShowUploadVideo] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setaAppState("home");
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
                setaAppState("login");
            }
        });
    }, []);

    // useEffect(
    //     () => {
    //         const querySnapshot = getDocs(collection(db, "videos"));
    //         querySnapshot.forEach((doc) => {
    //             // setVideos(`${doc.id} => ${doc.data()}`);
    //             console.log(doc);
    //         });
    //     },

    //     //     () =>
    //     //         onSnapshot(CollectionReference(db, "videos"), (snapshot) =>
    //     //             setVideos(
    //     //                 snapshot.docs.map((doc) => ({
    //     //                     id: doc.id,
    //     //                     data: doc.data(),
    //     //                 }))
    //     //             )
    //     //         ),
    //     //     // db.collection("videos").onSnapshot((snapshot) => {
    //     //     //     setVideos(snapshot.docs.map((doc) => doc.data));
    //     // });
    //     []
    // );
    console.log(videos);
    const value = {
        videos,
        appState,
        currentUser,
        showUploadVideo,
        setShowUploadVideo,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
