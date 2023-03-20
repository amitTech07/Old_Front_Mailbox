import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";

import ProfileDropdown from "../profileDropdown";
import Viewsearchbar from "../../3ColumnView/components/Viewsearchbar";
import { USER_PROFILE } from "../../config/constants";
import { isLogin } from "../../util";
import * as Api from "../../util/api/ApicallModule";
import {
  updateUserData,
  updateActiveModule,
} from "../../redux/action/InboxAction";
import { MAIL_ACTIONS } from "../../util";

const customStyles = {
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: "10001",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "22px",
  },
};

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [switchUserData, setSwitchUserData] = useState({
    name: {},
    isLoading: false,
  });
  const profileNode = useRef();
  const history = useHistory();
  const location = useLocation();
  let logData = {};
  const logDataFunction = (type, mail_id, attachId) => {
    logData = {
      type: type,
      mail_id: mail_id,
      attach_id: attachId,
    };
  };
  useEffect(() => {
    const isAuthenticated = isLogin();
    isAuthenticated && getUserData();
  }, []);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleProfileSection);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleProfileSection);
    };
  }, []);

  const getUserData = async () => {
    logDataFunction("USER DATA", 0, 0);
    const resp = await Api.ApiHandle(USER_PROFILE, "", "GET", logData);
    if (resp && resp.status === 1) {
      props.updateUserData(resp?.data);
    }
  };

  const handleProfileSection = (event, value) => {
    if (
      profileNode &&
      profileNode.current &&
      !profileNode.current.contains(event.target)
    ) {
      setOpen(false);
    } else {
      if (value === 1) {
        if (open) setOpen(false);
        else setOpen(true);
      }
    }
  };

  // const handleredirect = () => {
  //   const layoutView = localStorage.getItem("layoutView");
  //   layoutView === "2ColView"
  //     ? history.push("/mail")
  //     : history.push("/3ColumnView");
  // };

  return (
    <>
      <div className="nk-header nk-header-fixed is-light">
        <div className="container-fluid">
          <div className="nk-header-wrap">
            {/* <NavLink exact to="/mail" style={{ marginRight: "auto" }}> */}
            <div
              className="nk-header-app-name"
              style={{
                cursor: "pointer",
                marginRight: "auto",
                marginLeft: "-9px",
              }}
              onClick={async () => {
                history.push("/mail");
              }}
            >
              <div className="nk-header-app-logo">
                <em
                  className="icon ni ni-inbox bg-purple-dim"
                  style={{ fontSize: 36 }}
                ></em>
                {/* <img
                  className="image"
                  style={{ maxWidth: "420%", width: "450%" }}
                  src={Icon}
                  alt="Mailbox"
                /> */}
              </div>
              <div className="nk-header-app-info">
                <span className="lead-text" style={{ fontSize: 20 }}>
                  Mail Box
                </span>
              </div>
            </div>
            {/* </NavLink> */}
            {location.pathname === "/3ColumnView" && (
              <div>
                <Viewsearchbar filterOptions={props.filterOptions} />
                {/* // onSubmit={searchMail} */}
                {/* <Search onChange={handleChange} onSubmit={searchMail} /> */}
              </div>
            )}

            <div className="nk-header-tools" ref={profileNode}>
              <ul className="nk-quick-nav">
                {props.userData.role === 0 ? "" : ""}
                <li className="dropdown user-dropdown">
                  <span
                    onClick={(e) => handleProfileSection(e, 1)}
                    className="dropdown-toggle mr-n1"
                  >
                    <abbr title="User Profile">
                      <div className="user-toggle">
                        <div className="user-avatar sm">
                          <em className="icon ni ni-user-alt"></em>
                        </div>
                      </div>
                    </abbr>
                  </span>
                  {open && (
                    <ProfileDropdown
                      showData={"Profile"}
                      getUserData={getUserData}
                      setSwitchUserData={setSwitchUserData}
                      setSwitchUser={props.setSwitchUser}
                      autoRefreshInterval={props.autoRefreshIntervalUnread}
                      autoRefreshIntervalAll={props.autoRefreshIntervalAll}
                      autoRefreshIntervalCrashed={
                        props.autoRefreshIntervalCrashed
                      }
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {switchUserData.isLoading && (
        <Modal
          isOpen={switchUserData.isLoading}
          id="loader"
          // onRequestClose={handleCloseModal}
          style={customStyles}
          effect="fadeInUp"
        >
          {`Switching from ${switchUserData?.name.prevDesgi} to ${switchUserData?.name.currentDesgi}`}
        </Modal>
      )}
    </>
  );
};

const mapActionToProps = {
  updateUserData,
  updateActiveModule,
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, mapActionToProps)(Navbar);
