import React from "react";
import "../closefriends/CloseFriends.css";

const CloseFriends = ({ user }) => {
    return (
        <div>
            <li className="sidebarFriend">
                <img
                    src={user.profilePicture}
                    alt="sidebarFriendImg"
                    className="sidebarFriendImg"
                />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    );
};

export default CloseFriends;
