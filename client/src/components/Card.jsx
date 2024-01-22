import React from "react";
import "../style/Card.css";

const Card = (props) => {
  const { id, name, image, temperaments, weight } = props;
  return (
    <div id={id} className="cardContainer">
      <img src={image} alt="Not Found" />
      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Temperaments: </span>
        {temperaments}
      </p>
      <p>
        <span>Weight (kg): </span>
        {weight}
      </p>
    </div>
  );
};

export default Card;
