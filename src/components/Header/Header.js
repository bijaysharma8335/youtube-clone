import React, { useState } from "react";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import {
    Apps,
    CameraAltOutlined,
    Menu,
    Notifications,
    PersonAddOutlined,
    Search,
    VideoCall,
} from "@material-ui/icons";
import logo from "../../Assets/logo.png";
import "./Header.css";
import { useAppContext } from "./../../context/AppContext";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));
const Header = () => {
    const classes = useStyles();

    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);
    const id = open ? "simple-popover" : undefined;

    const handleClick = (e) => setAnchorE1(e.currentTarget);

    const handleClose = () => setAnchorE1(null);
    const { currentUser, setShowUploadVideo, showUploadVideo } =
        useAppContext();

    return (
        <div className="header">
            <div className="header_left">
                <Menu className="header_menuicon" />
                <img className="header_logo" src={logo} alt="youtube" />
            </div>

            <form className="header_center">
                <input
                    type="text"
                    className="header_input"
                    placeholder="search"
                />
                <Button className="header_btn">
                    <Search className="header_searchIcon" />
                </Button>
            </form>

            <div className="header_right">
                <VideoCall onClick={() => setShowUploadVideo(true)} />
                <Apps />
                <Notifications />
                <Avatar onClick={handleClick} />
                <Popover
                    open={open}
                    id={id}
                    onClose={handleClose}
                    anchorEl={anchorE1}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    // transformOrigin={{ vertical: "top" }}
                >
                    <div className="home_popoverContainer">
                        <div className="home_popover_top">
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                badgeContent={
                                    <div className="home_badge">
                                        <CameraAltOutlined className="home_camera" />
                                    </div>
                                }
                            >
                                <Avatar className={classes.large} />
                            </Badge>

                            <div className="home_text">
                                <div className="home_displayName">
                                    {currentUser?.displayName}
                                </div>
                                <div className="home_mail">
                                    {currentUser?.email}
                                </div>
                            </div>

                            <div className="home_btn">
                                Manage Your Google Account
                            </div>
                        </div>

                        <div className="home_popover_btn">
                            <div className="home_addBtn">
                                <PersonAddOutlined className="home_addIcon" />
                                <p>Add Another Account</p>
                            </div>

                            <Button
                                onClick={() => signOut(auth)}
                                variant="outlined"
                                className="home_signOut"
                            >
                                SignOut
                            </Button>

                            <div className="home_popover_footer">
                                <p>Privacy Policy</p>
                                <span>*</span>
                                <p>Terms of Service</p>
                            </div>
                        </div>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
