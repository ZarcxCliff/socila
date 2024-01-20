import React from "react";
import "../topbar/Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
const Topbar = () => {
    return (
        <div className="topbarContain">
            <div className="topbarLeft">
                <span className="logo">CliffSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend,post or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img
                    src="/assets/person/6.jpeg"
                    alt="profile"
                    width={30}
                    height={30}
                    className="topbarImg"
                />
            </div>
        </div>
    );
};

export default Topbar;
