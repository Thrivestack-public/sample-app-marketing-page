import React from "react";
import PropTypes from "prop-types";

function Hotspot(props) {
  return (
    <div className={`absolute ${props.className || ""}`}>
      <span className="relative flex h-[24px] w-[24px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-[24px] w-[24px] bg-orange-500 border-[2px] border-white text-white flex items-center justify-center">
          {props.label || ""}
        </span>
      </span>
    </div>
  );
}

Hotspot.propTypes = {
  classname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Hotspot;
