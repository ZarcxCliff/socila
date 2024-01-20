import React from "react";
import "../profile/Profile.css";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import Feed from "../components/feed/Feed";
import Topbar from "../components/topbar/Topbar";
const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <LeftBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="/assets/post/3.jpeg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="/assets/person/3.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Aissa</h4>
                            <p className="profileInfoDesc">Hello My Friends</p>
                        </div>
                    </div>
                    <div className="profileRightButtom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
