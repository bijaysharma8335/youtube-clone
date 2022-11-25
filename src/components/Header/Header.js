import React from "react";
import { Avatar, Button } from "@material-ui/core";
import {
    Apps,
    Menu,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import logo from "../../Assets/logo.png";
import "./Header.css";

const Header = () => {
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
                <VideoCall />
                <Apps />
                <Notifications />
                <Avatar />
            </div>
        </div>
    );
};

export default Header;
