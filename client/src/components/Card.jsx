import React from "react";
import "../style/Card.css";

const Card = (props) => {
  const { id, name, image, temperaments, weight } = props;
  return (
    <article id={id} className="cardContainer">
      <div className="cardContainer_img">
        <img src={image} alt="Not Found" className="cardContainer_img-dogs" />
      </div>
      <p className="cardContainer_text">
        <span>Name: </span>
        {name}
      </p>
      <p className="cardContainer_text">
        <span>Weight (kg): </span>
        {weight}
      </p>
      <p className="cardContainer_text">
        <span>Temperaments: </span>
        {temperaments}
      </p>
    </article>
  );
};

export default Card;
