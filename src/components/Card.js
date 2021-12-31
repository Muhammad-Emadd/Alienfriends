import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc border-box bg-light-green self-end dib br3 pa3 ma2 grow fw5 bw2 shadow-hover shadow-5 ">
      <img
        src={`https://robohash.org/set_set2/bgset_bg1/${id}?size=220x220`}
        alt="alien"
      />
      <div>
        <h2 className="f3">{name}</h2>
        <p className="f6">{email}</p>
      </div>
    </div>
  );
};

export default Card;
