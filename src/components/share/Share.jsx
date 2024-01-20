import React from "react";
import "../share/Share.css";
import {
    PermMedia,
    Cottage,
    LocationOn,
    AddReaction,
} from "@mui/icons-material";
const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfilePic"
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                    <input
                        placeholder="what's in your mind"
                        className="shareInput"
                    />
                </div>
                <hr className="hareHr" />
                <div className="shareButtom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                            <Cottage htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                            <LocationOn
                                htmlColor="green"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Location</span>
                            <AddReaction
                                htmlColor="yellow"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Imoji</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
