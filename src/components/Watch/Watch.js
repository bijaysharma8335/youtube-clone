import { Avatar, Button } from "@material-ui/core";
import {
    MoreHoriz,
    PlaylistAdd,
    Reply,
    ThumbDownAlt,
    ThumbUpAlt,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import videoURL from "../../Assets/videos/video.mp4";
import VideoSmall from "../VideoSmall/VideoSmall";
import "./Watch.css";
const Watch = () => {
    const navigate = useNavigate();
    const handleAvatarRedirect = () => {
        navigate("/PreviewChannel");
    };
    return (
        <div className="watch">
            <div className="watch_wrap">
                <div className="watch_left">
                    <video className="watch_video" autoplay controls>
                        <source src={videoURL} type="video/mp4" />
                    </video>
                    <div className="watch_leftBtn">
                        <h1 className="watch_title">
                            Amazon Prime Video Trailer
                        </h1>
                        <div className="watch videoInfo">
                            <div className="watch_videoInfoLeft">
                                <p className="videothumb_text">
                                    123views* 28 Dec 23,2021
                                </p>
                            </div>

                            <div className="watch_videoInfoRight">
                                <div className="watch_likeContainer">
                                    <div className="watch_likeWrap">
                                        <div className="watch_likeBtnContainer color--gray">
                                            <ThumbUpAlt className="watch_icon" />
                                            <p>15k</p>
                                        </div>

                                        <div className="watch_likeBtnContainer color--gray">
                                            <ThumbDownAlt className="watch_icon" />
                                            <p>200</p>
                                        </div>
                                    </div>
                                    <div className="watch_likeDislikes" />
                                </div>
                                <div className="watch_likeBtnContainer color--gray">
                                    <Reply className="watch_icon share-icon" />
                                    <p>SHARE</p>
                                </div>
                                <div className="watch_likeBtnContainer color--gray">
                                    <PlaylistAdd className="watch_icon play-addIcon" />
                                    <p>SAVE</p>
                                </div>
                                <div className="watch_likeBtnContainer color--gray">
                                    <MoreHoriz className="watch_icon play-addIcon" />
                                    <p>SAVE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="watch_details">
                        <div className="watch_detailsContainer">
                            <div className="videothumb_details watch-avatarWrap">
                                <Avatar
                                    className="watch_avatar"
                                    onClick={handleAvatarRedirect}
                                />
                                <div className="videothumb_channel">
                                    <h1 className="videothumb_title ">
                                        Prime Video
                                    </h1>

                                    <p className="videothumb_text">
                                        Bijay Sharma
                                    </p>
                                    <p className="videothumb_text watch-subCount">
                                        <p>8.5M Subscribers</p>
                                    </p>
                                </div>
                            </div>
                            <Button
                                className="watch_subBtn"
                                color="primary"
                                variant="contained"
                            >
                                SUBSCRIBE
                            </Button>
                        </div>
                        <div className="watch_description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quibusdam fugit consequuntur
                                id reprehenderit, veritatis ipsam. Nesciunt
                                accusantium veniam consectetur! Aspernatur
                                placeat atque dolore mollitia nemo corrupti
                                eaque modi minus. Porro cupiditate doloremque
                                quo commodi inventore reprehenderit eos
                                consectetur, cumque quis?
                            </p>
                            <p className="watch_showMore">SHOW MORE</p>
                        </div>
                    </div>
                </div>
                <div className="watch_right">
                    <VideoSmall />
                    <VideoSmall />
                    <VideoSmall />
                    <VideoSmall />
                    <VideoSmall />
                </div>
            </div>
        </div>
    );
};

export default Watch;
// https://www.youtube.com/watch?v=8KLOUhN_PQY
