import { useState, useEffect } from "react";
import { setSearchDog, setSorting } from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

const useDogFilter = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [initialDogs, setInitialDogs] = useState([]);

  useEffect(() => {
    setInitialDogs(dogs);
    setFilteredDogs(dogs);
  }, [dogs]);

  const resetFilter = () => {
    setFilteredDogs(initialDogs);
  };

  const filterByTemperament = (temperament) => {
    if (temperament == "none") {
      return { ...filteredDogs, setFilteredDogs: dogs };
    }
    const filtered = initialDogs.filter((dog) => {
      return dog.temperament !== undefined
        ? dog.temperament.toLowerCase().includes(temperament.toLowerCase())
        : false;
    });
    setFilteredDogs(filtered);
  };

  const orderByName = (key, order) => {
    if (order === "alphabetical") {
      return setFilteredDogs(dogs);
    }
    const sorted = filteredDogs.slice().sort((a, b) => {
      let valueA, valueB;
      if (key === "name") {
        valueA = a.name.toUpperCase();
        valueB = b.name.toUpperCase();
      }

      if (order === "asc") {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else if (order === "desc") {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
    });
    setFilteredDogs(sorted);
  };

  const orderByWeight = (key, order) => {
    if (order === "weight") {
      return setFilteredDogs(dogs);
    }
    const sorted = filteredDogs.slice().sort((a, b) => {
      let valueA, valueB;
      if (key === "name") {
        valueA = parseInt(a.weight.metric.split(" ")[0]);
        valueB = parseInt(b.weight.metric.split(" ")[0]);
      }
      if (order === "asc") {
        return valueA - valueB;
      } else if (order === "desc") {
        return valueB - valueA;
      }
    });
    setFilteredDogs(sorted);
  };

  useEffect(() => {
    if (initialDogs.length === 0) return; // Evitar ejecución al montar
    dispatch(setSorting(true)); // Indicar que se está filtrando
  }, [filteredDogs, initialDogs.length, dispatch]);

  return {
    filteredDogs,
    filterByTemperament,
    orderByName,
    orderByWeight,
    resetFilter,
  };
};

export default useDogFilter;
