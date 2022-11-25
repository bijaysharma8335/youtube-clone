import { Avatar } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoThumb = () => {
    const navigate = useNavigate();
    const handleThumbClick = () => {
        navigate("/watch");
    };
    const handleAvatarClick = () => {
        navigate("/PreviewChannel");
    };
    return (
        <div className="videothumb">
            <img
                onClick={handleThumbClick}
                src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg"
                className="videothumb_thumbnail"
                alt=""
            />
            <div className="videothumb_details">
                <Avatar onClick={handleAvatarClick} />
                <div className="videothumb_channel">
                    <h1 className="videothumb_title">Create a youtube clone</h1>
                    <div className="thumb_texts">
                        <p className="videothumb_text">Bijay Sharma</p>
                        <p className="videothumb_text">
                            123 views * 10 hours ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoThumb;
