import React from "react";
import Card from "./Card";
import "../style/Cards.css";

const Cards = (props) => {
  const { dogs } = props;
  //console.log(dogs);
  return (
    <div className="dogList">
      {dogs.map(
        ({ id, name, image, temperament, weight, height, life_span }) => (
          <Card
            key={id}
            id={id}
            image={image.url}
            name={name}
            height={height.metric}
            weight={weight.metric}
            temperaments={temperament}
            life_span={life_span}
          />
        )
      )}
    </div>
  );
};

export default Cards;
