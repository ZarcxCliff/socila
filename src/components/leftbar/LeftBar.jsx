import React from "react";
import "../leftbar/LeftBar.css";
import {
    RssFeed,
    ChatOutlined,
    SmartDisplay,
    GroupOutlined,
    BookmarkOutlined,
    QuizOutlined,
    WorkOutlined,
    InsertInvitationOutlined,
    School,
} from "@mui/icons-material";
import { Users } from "../../DummyData";
import CloseFriends from "../closefriends/CloseFriends";

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed />
                        <span className="sidebarlistItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatOutlined />
                        <span className="sidebarlistItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <SmartDisplay />
                        <span className="sidebarlistItemText">Vidoes</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupOutlined />
                        <span className="sidebarlistItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkOutlined />
                        <span className="sidebarlistItemText"> Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuizOutlined />
                        <span className="sidebarlistItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlined />
                        <span className="sidebarlistItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <InsertInvitationOutlined />
                        <span className="sidebarlistItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School />
                        <span className="sidebarlistItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img
                            src="/assets/person/2.jpeg"
                            alt="sidebarFriendImg"
                            className="sidebarFriendImg"
                            width={32}
                            height={32}
                        />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {Users.map((u) => (
                        <CloseFriends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftBar;
