import React from "react";
import "./Main.css";
import VideoThumb from "./VideoThumb";
import { useAppContext } from "./../../context/AppContext";
const Main = () => {
    const videos = useAppContext();
    return (
        <div className="main">
            {/* {videos?.map((video) => (
                <VideoThumb video={video} />
            ))} */}
            <VideoThumb />
        </div>
    );
};

export default Main;
