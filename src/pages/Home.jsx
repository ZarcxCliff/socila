// import { Feed } from "@mui/icons-material";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import Feed from "../components/feed/Feed";
import Topbar from "../components/topbar/Topbar";
import "../pages/Home.css";

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </>
    );
};

export default Home;
