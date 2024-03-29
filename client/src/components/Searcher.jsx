import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchDog, setFiltering } from "../redux/actions/actions.js";
import "../style/Searcher.css";

const Searcher = () => {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // Declara una función que se ejecuta cuando cambia el valor del input.
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  // Declara una función que se ejecuta recibir un valor.
  const handleSearch = () => {
    const filterByName = dogs.filter((dg) => {
      return dg.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    dispatch(setSearchDog(filterByName));
  };

  // Utiliza el efecto useEffect para realizar acciones cuando cambia el valor de 'inputValue'.
  useEffect(() => {
    if (inputValue == "") {
      dispatch(setFiltering(false));
    } else {
      handleSearch();
      dispatch(setFiltering(true));
    }
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={handleInputChange}
        placeholder="Search dogs..."
        className="searcher"
      />
    </div>
  );
};

export default Searcher;
