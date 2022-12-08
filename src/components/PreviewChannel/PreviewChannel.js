import React from "react";
import "./PreviewChannel.css";
import "../Watch/Watch.css";
import img from "../../Assets/channelArt.jpg";
import { Avatar, Button } from "@material-ui/core";
import VideoSmall from "../VideoSmall/VideoSmall";
const PreviewChannel = () => {
    return (
        <div className="channel">
            <img className="channel_art" alt="" src={img} />
            <div className="channel_details">
                <div className="channel_detailsWrap">
                    <div className="channel_avatarWrap">
                        <Avatar className="channel_avatar" />
                        <div className="videothumb_channel">
                            <h1 className="videothumb_title">Amazon Prime</h1>

                            <p className="videothumb_text watch_subCount">
                                4.85 M Suscribers
                            </p>
                        </div>
                        <Button
                            className="watch_subBtn channel_subBtn"
                            // color="primary"
                            variant="combined"
                        >
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>

                <div className="channel_links">
                    <div className="channel_link channel_link--active">
                        <p>HOME</p>
                    </div>
                    <div className="channel_link">
                        <p>VIDEOS</p>
                        <div className="channel_link_border"></div>
                    </div>
                    <div className="channel_link">
                        <p>COMMUNITY</p>
                    </div>
                    <div className="channel_link">
                        <p>PLAYLIST</p>
                    </div>
                    <div className="channel_link">
                        <p>CHANNELS</p>
                    </div>
                    <div className="channel_link">
                        <p>ABOUT</p>
                    </div>
                </div>
            </div>
            <div className="channel_content">
                <div className="channel_contentWrapper">
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                    <VideoSmall channelView />
                </div>
            </div>
        </div>
    );
};

export default PreviewChannel;
