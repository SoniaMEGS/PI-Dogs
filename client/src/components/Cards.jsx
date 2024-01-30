import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   filterCardsByTemperament,
//   orderCardsByName,
// } from "../redux/actions/actions.js";

import Card from "./Card";
import Paginado from "./Paginated.jsx";
import "../style/Cards.css";

const Cards = (props) => {
  const { dogs } = props;
  //console.log(dogs);

  const [dogsPerPage, setDogsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;

  // const dispatch = useDispatch();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name == "order") {
  //     dispatch(orderCardsByName(value));
  //   } else if (name == "filter") {
  //     dispatch(filterCardsByTemperament(value));
  //   }
  // };

  return (
    <div>
      {/* <select name="order" id="order" onChange={handleChange}>
        <option value="Asc">A → Z</option>
        <option value="Desc">Z → A</option>
      </select>
      <select name="filter" id="filter" onChange={handleChange}>
        <option value="Calm">Calm</option>
        <option value="Adaptable">Adaptable</option>
      </select> */}
      <div className="dogList">
        {dogs &&
          dogs
            .map(
              ({ id, name, image, temperament, weight, height, life_span }) => (
                <NavLink key={id} to={`/detail/${name}`}>
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
