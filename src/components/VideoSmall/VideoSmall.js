import React from "react";
import "./VideoSmall.css";
const VideoSmall = () => {
    return (
        <div className="videoSmall">
            <div className="videoSmall_left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vkNcGe7EV33X3lR2j4leUDFsS0Y5sJrEGdESt3OX&s"
                    alt="thumbnail"
                    className="videoSmall_thumbnail"
                />
                <div className="videoSmall_right">
                    <p className="videoSmall_title">
                        Amazon prime video's new web series
                    </p>
                    <div className="videoSmall_texts videothumb_texts">
                        <p className="videothumb_text">Amazon Prime Video</p>
                        <p className="videothumb_text">
                            100k views * 3 days ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSmall;
