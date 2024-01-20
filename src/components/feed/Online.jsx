import React from "react";
import "../feed/Online.css";

const Online = ({ user }) => {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarImgProfileImgContainer">
                    <img
                        className="rightbarProfileImg"
                        src={user.profilePicture}
                        alt=""
                    />
                    <span className="rightBarProfileText"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    );
};

export default Online;
