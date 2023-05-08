import React from "react";
import "./Profile.scss";
import Header from "../../../Components/header/Header";
import { BiPencil } from "react-icons/bi";
import emptyprofile from "../../../assets/emptyprofile.png";
import OrderComp from "./Components/OrderComp";
import LikeComp from "./Components/LikeComp";
import FollComp from "./Components/FollComp";
import { AiOutlineRight } from "react-icons/ai";
/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Profile Page which shows profile of user showing some data like name ,orders,likes and following Pges.
 * @returns {JSX.Element of Profile Page}
 */
const Profile = () => {
  return (
    <div>
      <Header />
      <div className="full_body_prof">
        <div className="form_proff">
          <div className="greyform-prof">
            <div style={{ marginTop: 50, marginLeft: 50, display: "flex" }}>
              <img
                src={emptyprofile}
                alt="profilelogo"
                style={{ width: 120, height: 120 }}
              />
              <div style={{ display: "block" }}>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{
                      fontSize: 30,
                      marginLeft: 15,
                      marginTop: 20,
                      fontWeight: 600,
                      color: "black",
                    }}
                  >
                    Ziad Elsamadony
                  </h1>
                  <BiPencil
                    style={{
                      marginLeft: 18,
                      marginTop: 33,
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <a
                    href="#"
                    style={{ marginLeft: 15, color: "grey", fontSize: 15 }}
                  >
                    1 order
                  </a>
                  <a
                    href="#"
                    style={{
                      marginLeft: 8,
                      color: "grey",
                      width: 15,
                      fontWeight: 600,
                    }}
                  >
                    .
                  </a>
                  <a href="#" style={{ color: "grey", fontSize: 15 }}>
                    2 likes
                  </a>
                  <a
                    href="#"
                    style={{
                      marginLeft: 8,
                      color: "grey",
                      width: 15,
                      fontWeight: 600,
                    }}
                  >
                    .
                  </a>
                  <a href="#" style={{ color: "grey", fontSize: 15 }}>
                    2 following
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="compon" >
            <h5>Orders</h5>
            <div className="orderecss"><OrderComp data_testid="Order-Form-id"  /></div>
            <button id="btn_prof_id" className="btn_prof"> See past Orders</button>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Interests
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr  className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Collections
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Likes
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <div className="likeblk_prof">
              <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" />
            </div>
            <hr className="zzz"></hr>
            <div className="follblk_prof">
            <div style={{ display: "flex", marginTop: 25 }}>
              <p className="intersts_prof">Following</p>
              <a href="#" className="events_prof">
                See events
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <div className="follblk_prof">
              <FollComp text="GoMyCode" data_testid="Follow-Form-id" />
              <FollComp text="Ezz event riders" />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
