import {
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Slide,
} from "@material-ui/core";
import { Close, Publish } from "@material-ui/icons";
import React, { useState } from "react";
import { forwardRef } from "react";
import { useAppContext } from "../../context/AppContext";
import "./styles.css";
import UploadVideo from "./UploadVideo";
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const SelectVideo = () => {
    const { showUploadVideo, setShowUploadVideo } = useAppContext();
    const [video, setVideo] = useState(null);
    const handleClose = () => setShowUploadVideo(false);
    const handleVideoChange = (e) => {
        if (e.target.files[0]) setVideo(e.target.files[0]);
    };

    return (
        <div>
            <Dialog
                TransitionComponent={Transition}
                open={showUploadVideo}
                keepMounted
            >
                {video ? (
                    <UploadVideo
                        video={video}
                        setVideo={setVideo}
                        handleClose={handleClose}
                    />
                ) : (
                    <>
                        <div className="selectVideo_header">
                            <DialogTitle>Upload Video</DialogTitle>
                            <Close
                                className="selectVideo_closeIcon"
                                onClick={handleClose}
                            />
                        </div>
                        <Divider />
                        <DialogContent className="selectVideo_dialog">
                            <div className="selectVideo_publish">
                                <Publish className="selectVideo_publishIcon" />
                            </div>
                            <div className="selectVideo_text">
                                <p className="sv_texts_title">
                                    Drag and Drop Video files to Upload
                                </p>
                                <p className="sv_texts-subtitle">
                                    Your video will be private until you publish
                                    them.
                                </p>
                            </div>
                            <input
                                type="file"
                                onChange={handleVideoChange}
                                className="custom_file-input"
                            />
                            <p className="sv_texts-prpo">
                                By submitting your videos to YouTube, you
                                acknowledge that you agree to YouTube's Terms of
                                Service and Community Guidelines. Please be sure
                                not to violate others' copyright or privacy
                                rights. Learn more
                            </p>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </div>
    );
};

export default SelectVideo;
