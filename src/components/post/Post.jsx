import React, { useState } from "react";
import "../post/Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../DummyData";
const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isliked, setIsliked] = useState(false);
    const LikeHandler = (e) => {
        e.preventDefault();
        setLike(isliked ? like - 1 : like + 1);
        setIsliked(!isliked);
    };
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={
                                Users.filter((u) => u.id === post?.userId)[0]
                                    .profilePicture
                            }
                            alt=""
                        />
                        <span className="postUsername">
                            {
                                Users.filter((u) => u.id === post?.userId)[0]
                                    .username
                            }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="PostImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postButtonleft">
                        <img
                            onClick={LikeHandler}
                            className="likeIcon"
                            src="/assets/like.png"
                            alt=""
                        />
                        <img
                            onClick={LikeHandler}
                            className="likeIcon"
                            src="/assets/heart.png"
                            alt=""
                        />
                        <span className="postlikeCounter">
                            {like} people like it
                        </span>
                    </div>
                    <div className="postButtonright">
                        <span className="postcomments">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
