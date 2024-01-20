import React from "react";
import "../rightbar/RightBar.css";
import { Users } from "../../DummyData";
import Online from "../feed/Online";

const RightBar = ({ profile }) => {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img
                        className="birthdayImg"
                        src="/assets/gift.png"
                        alt=""
                    />
                    <span className="birthText">
                        <b>Aissa</b> and
                        <b> 3 other friends </b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTittle">Online Friends</h4>
                <ul className="rightbarOnlineFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarImgProfileImgContainer">
                            <img
                                className="rightbarProfileImg"
                                src="/assets/person/3.jpeg"
                                alt=""
                            />
                            <span className="rightBarProfileText"></span>
                        </div>
                        <span className="rightbarUsername">Ajara Frames</span>
                    </li>

                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTittle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Yaounde</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Baffoussam</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">RelationShip:</span>
                        <span className="rightbarInfoValue">Coupled</span>
                    </div>
                </div>
                <h4 className="rightbarTittle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/1.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Rufine</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/3.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Ajara</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/4.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Santiago</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/5.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Maxi</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/6.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Jeremi</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img
                            src="/assets/person/2.jpeg"
                            alt=""
                            className="rightbarfolloingImg"
                        />
                        <span className="rightbarfollowingName">Alex</span>
                    </div>
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
};

export default RightBar;
