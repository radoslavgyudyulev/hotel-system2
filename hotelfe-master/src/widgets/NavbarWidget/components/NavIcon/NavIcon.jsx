import React from "react";

const NavIcon = ({ source, onClick }) => {
  return (
    <div
      style={{
        width: "80px",
      }}
      onClick={onClick}
    >
      <img src={source} />
    </div>
  );
};

export default NavIcon;
