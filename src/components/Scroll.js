import React from "react";
const Scroll = (prop) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "70vh",
        borderTop: "4px solid",
        borderImage:
          "linear-gradient(to right, #352f1a, #332d18, #312b16, #302a15, #2e2813, #2c2611, #2a2410, #28220e, #251f0d, #221d0b, #201a0a, #1d1808)9 100",
        marginTop: "10px",
      }}
    >
      {prop.children}
    </div>
  );
};
export default Scroll;
