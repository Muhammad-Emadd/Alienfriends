import React from "react";
import Card from "./Card.js";

const CardList = ({ aliens }) => {
  return (
    <div className="flex justify-center pa4 flex-auto flex-wrap">
      {aliens.map((alien, i) => {
        return (
          <Card key={i} id={alien.id} name={alien.name} email={alien.email} />
        );
      })}
    </div>
  );
};

export default CardList;
