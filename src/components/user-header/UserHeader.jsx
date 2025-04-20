import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditName from "../edit-name/EditName";

const UserHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const innerContentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(innerContentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="user-header">
      <h1>
        Welcome back <br />
        {useSelector((state) => state.user.userName)}!
      </h1>
      <button className="edit-button" onClick={toggleCollapse}>
        Edit Name
      </button>
      <div
        className="user-editor-content-wrapper"
        style={{ height: `${height}px` }}
      >
        <div className="user-editor-content" ref={innerContentRef}>
          <EditName cancel={toggleCollapse} />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
