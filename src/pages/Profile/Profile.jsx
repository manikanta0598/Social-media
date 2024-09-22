import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

export default function Profile({ setIsHome, isHome }) {
  return (
    <div>
      <Topbar setIsHome={setIsHome} isHome={isHome} />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/dev.png"
                alt=""
              />
              <img className="profileImg" src="assets/person/mani.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h3 className="Infoname">Manikanta Kayala</h3>
              <span className="Info">This is my profile</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
