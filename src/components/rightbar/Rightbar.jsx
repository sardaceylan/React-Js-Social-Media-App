import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="right-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
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
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">New York</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Madrid</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
