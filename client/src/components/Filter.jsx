import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSorting, setSearchDog } from "../redux/actions/actions.js";
import useDogFilter from "../hooks/useDogFilter.js";
import useTemperaments from "../hooks/useTemperaments.js";
import "../style/Filter.css";

const Filter = () => {
  const temperaments = useTemperaments();
  const dispatch = useDispatch();
  const initialFilterInput = {
    orderName: "",
    temperament: "",
    orderWeight: "",
  };
  const [filterInput, setFilterInput] = useState(initialFilterInput);
  const {
    filteredDogs,
    filterByTemperament,
    orderByName,
    orderByWeight,
    resetFilter,
  } = useDogFilter();
  const areEqual = Object.keys(filterInput).every(
    (key) => filterInput[key] === initialFilterInput[key]
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilterInput({
      ...filterInput,
      [name]: value,
    });
  };

  const handleFilter = () => {
    if (filterInput.orderName !== "")
      orderByName("name", filterInput.orderName);
    if (filterInput.orderWeight !== "")
      orderByWeight("name", filterInput.orderWeight);
    if (filterInput.temperament !== "")
      filterByTemperament(filterInput.temperament);
    dispatch(setSearchDog(filteredDogs));
  };

  useEffect(() => {
    if (!areEqual) {
      dispatch(setSorting(true));
      handleFilter();
    } else {
      resetFilter(); // Restablecer los filtros
      dispatch(setSorting(false));
    }
  }, [filterInput, resetFilter, dispatch, areEqual]);

  return (
    <div className="filters">
      <select
        className="filters_section"
        name="orderName"
        id="orderName"
        value={filterInput.orderName}
        onChange={handleInputChange}
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>
      <select
        className="filters_section"
        name="orderWeight"
        id="orderWeight"
        value={filterInput.orderWeight}
        onChange={handleInputChange}
      >
        <option value="weight">Weight</option>
        <option value="asc">Liviano → Pesado</option>
        <option value="desc">Pesado → Liviano</option>
      </select>

      <select
        className="filters_section"
        name="temperament"
        id="temperament"
        value={filterInput.temperament}
        onChange={handleInputChange}
      >
        <option key="none" value="">
          Temperament
        </option>
        {temperaments.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* <select
        className="filters_section"
        name="xx"
        id="xx"
        onChange={handleInputChange}
      >
        <option value="">xxx</option>
        <option value="">xxx</option>
      </select> */}
    </div>
  );
};

export default Filter;
