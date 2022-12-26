import React from "react";
import {
    ExpandMore,
    Home,
    OndemandVideo,
    Restore,
    Subscriptions,
    ThumbUp,
    VideoLibrary,
    WatchLater,
    Whatshot,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="sidebar">
            <div className="sidebar_buttons">
                <div
                    className="sidebar_btn sidebar_btn--active"
                    onClick={handleClick}
                >
                    <Home className="sidebar_icon" />
                    <p>Home</p>
                </div>

                <div className="sidebar_btn ">
                    <Whatshot className="sidebar_icon" />
                    <p>Trending</p>
                </div>

                <div className="sidebar_btn ">
                    <Subscriptions className="sidebar_icon" />
                    <p>Subscriptions</p>
                </div>
            </div>

            <div className="sidebar_buttons bottom">
                <div className="sidebar_btn ">
                    <VideoLibrary className="sidebar_icon" />
                    <p>Libraries</p>
                </div>

                <div className="sidebar_btn ">
                    <Restore className="sidebar_icon" />
                    <p>History</p>
                </div>

                <div className="sidebar_btn ">
                    <OndemandVideo className="sidebar_icon" />
                    <p>Your Videos</p>
                </div>

                <div className="sidebar_btn ">
                    <WatchLater className="sidebar_icon" />
                    <p>WatchLater</p>
                </div>

                <div className="sidebar_btn ">
                    <ThumbUp className="sidebar_icon" />
                    <p>Like Videos</p>
                </div>

                <div className="sidebar_btn ">
                    <ExpandMore className="sidebar_icon" />
                    <p>Show More</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
