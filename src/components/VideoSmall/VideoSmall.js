import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoSmall.css";

const VideoSmall = ({ channelView = false }) => {
    
    const navigate = useNavigate();

    const handleClickRedirect = () => {
        navigate("/watch");
    };
    return (
        <div
            onClick={handleClickRedirect}
            className={`videoSmall${channelView && "videoSmall_channelView"}`}
        >
            <div className="videoSmall_left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vkNcGe7EV33X3lR2j4leUDFsS0Y5sJrEGdESt3OX&s"
                    alt="thumbnail"
                    className={`videoSmall_thumbnail${
                        channelView && "videoSmall_channelView_img"
                    }`}
                />{" "}
            </div>

            <div className="videoSmall_right">
                <p className="videoSmall_title">
                    Amazon prime video's new web series
                </p>

                <div className="videoSmall_texts videothumb_texts">
                    {!channelView && (
                        <p className="videothumb_text">Amazon Prime Video</p>
                    )}

                    <p className="videothumb_text">100k views * 3 days ago</p>
                </div>
            </div>
        </div>
    );
};

export default VideoSmall;
