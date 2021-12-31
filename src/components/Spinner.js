import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="lds-ripple tc ma4 center flex">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
