import { Avatar } from "@material-ui/core";
import moment from "moment/moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoThumb = ({ video }) => {
    const navigate = useNavigate();
    const handleThumbClick = () => {
        navigate(`/watch/${video.id}`);
    };

    const handleAvatarClick = () => {
        navigate("/PreviewChannel");
    };
    
// const formattedDate = moment.unix(video?.timestamp?.seconds).format('YYYYMMMDD, HH:mm:ss').fromNow();


// const uploadedTime  = moment(formattedDate,'YYYYMMMDD, HH:mm:ss').fromNow();
    return (
        <div className="videothumb">
            <img
                onClick={handleThumbClick}
                src=
                // {video.thumbnailUrl}
                "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg"

                className="videothumb_thumbnail"
                alt=""
            />
            <div className="videothumb_details">
                <Avatar onClick={handleAvatarClick} />
                <div className="videothumb_channel">
                    <h1 className="videothumb_title">
                        Create a youtube clone
                        
                        {/* {video.title} */}
                    </h1>
                    <div className="thumb_texts">
                        <p className="videothumb_text">
                            Bijay Sharma
                            {/* {video.channelName} */}
                        </p>
                        <p className="videothumb_text">
                            123 views *
                            {/* • {uploadedTime} */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoThumb;
