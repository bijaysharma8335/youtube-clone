import React, { useEffect, useState } from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    TextField,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { useAppContext } from "../../context/AppContext";
import { db, storage } from "../../lib/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const UploadVideo = ({ video, setVideo, handleClose }) => {
    const [progress, setProgress] = useState(0);
    const [thumbnailProgress, setThumbnailProgress] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState(null);

    const [videoUrl, setVideoUrl] = useState(null);
    const [id, setId] = useState(uuidv4());

    const [thumbnailUploaded, setThumbnailUploaded] = useState(false);
    const [videoUploaded, setVideoUploaded] = useState(false);
    const { currentUser } = useAppContext();

    const createId = () => setId(uuidv4());

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setThumbnail(e.target.files[0]);
        }
    };
    const handleThumbnailUpload = () => {
        const thumbnailRef = ref(
            storage,
            `/thumbnails/${thumbnail.name}`,
            thumbnail
        );
        const uploadThumbnailTask = uploadBytesResumable(
            thumbnailRef,
            thumbnail
        );
        uploadThumbnailTask.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setThumbnailProgress(progressPercent);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadThumbnailTask.snapshot.ref)
                    .then((url) => {
                        setThumbnailUrl(url);
                        setThumbnailUploaded(true);
                    })
                    .catch((err) => console.log(err));
            }
        );
    };
    const handleVideoUpload = () => {
        const storageRef = ref(storage, `/videos/${video.name}`);

        const uploadTask = uploadBytesResumable(storageRef, video);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setVideoUrl(url);
                        setVideoUploaded(true);
                    })
                    .catch((err) => console.log(err));
            }
        );
    };

    const handleSubmit = () => {
        createId();
        handleVideoUpload();
        handleThumbnailUpload();
    };

    useEffect(() => {
        if (thumbnailUploaded && videoUploaded) {
            addDoc(collection(db, "/videos"), {
                // timestamp: Timestamp,
                id: id,
                videoURL: videoUrl,
                thumbnailURL: thumbnailUrl,
                title: title,
                description: description,
                channelName: currentUser.displayName,
                email: currentUser.email,
            }).then(() => {
                setProgress(0);
                setVideo(null);
                setTitle("");
                setThumbnail("");
                setThumbnailUrl("");
                setVideoUrl("");
                setDescription("");
                handleClose();
            });

            // db.collection("videos")
            //     .add({
            //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //         id: id,
            //         videoURL: videoUrl,
            //         thumbnailURL: thumbnailUrl,
            //         title: title,
            //         description: description,
            //         channelName: currentUser.displayName,
            //         email: currentUser.email,
            //     })
            //     .then(() => {
            //         setProgress(0);
            //         setVideo(null);
            //         setTitle("");
            //         setThumbnail("");
            //         setThumbnailUrl("");
            //         setVideoUrl("");
            //         setDescription("");
            //         handleClose();
            //     });
        }
    }, [thumbnailUploaded, videoUploaded]);

    return (
        <div>
            <div className="selectVideo_header">
                <DialogTitle>Upload Videos</DialogTitle>
                <Close
                    className="selectVideo_closeIcon"
                    onClick={handleClose}
                />
            </div>
            <Divider />

            <DialogContent>
                <DialogTitle>Details</DialogTitle>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={10}
                    placeholder="Tell viewers about your video"
                    style={{ marginTop: "30px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="file"
                    className="custom_file-input  add-thumbnail"
                    placeholder="Thumbnail"
                    onChange={handleChange}
                />
                <progress value={progress} max="100" />
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Upload
                    </Button>
                </DialogActions>
            </DialogContent>
            
        </div>
    );
};

export default UploadVideo;
