import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  const active = paths[2];
  return (
    <div className="list-group">
      <a className="list-group-item">Tuiter</a>
      <Link to="/tuiter/home" className={`list-group-item list-group-item-action d-flex p-2
             ${active === 'home'?'active':''}`}>
         <i className="fa fa-home mt-1"></i>
         <div className="d-none d-xl-block  ms-1">Home</div>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-flex p-2
             ${active === 'explore'?'active':''}`}>
         <i className="fa fa-hashtag mt-1"></i>
         <span className="d-none d-xl-block  ms-1">Explore</span>
      </Link>
      <a
        className={`list-group-item ${
          active === "notifications" ? "active" : ""
        }`}
      >
        Notifications
      </a>
      <a className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        Messages
      </a>
      <a
        className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}
      >
        Bookmarks
      </a>
      <a className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        Lists
      </a>
      <Link to="/tuiter/profile" className={`list-group-item list-group-item-action d-flex p-2
                          ${active === 'profile'?'active':''} ${active === 'edit-profile'?'active':''}`}>
                      <i className="fa fa-user mt-1"></i>
                      <div className="d-none d-xl-block float-left ms-1">Profile</div>
      </Link>
      <a className={`list-group-item ${active === "more" ? "active" : ""}`}>
        More
      </a>
    </div>
  );
};

export default NavigationSidebar;
