import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginated.jsx";
import "../style/Cards.css";

const Cards = (props) => {
  const { dogs } = props;

  const [dogsPerPage, setDogsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  return (
    <div>
      <div className="dogList">
        {dogs
          .map(
            ({ id, name, image, temperament, weight, height, life_span }) => (
              <NavLink key={id} to={`/detail/${name}`}>
                <Card
                  key={id}
                  id={id}
                  s
                  image={image.url}
                  name={name}
                  height={height.metric}
                  weight={weight.metric}
                  temperaments={temperament}
                  life_span={life_span}
                />
              </NavLink>
            )
          )
          .slice(firstIndex, lastIndex)}
      </div>
      <Paginado
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dogs={dogs}
      />
    </div>
  );
};

export default Cards;
