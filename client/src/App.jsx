import { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import React from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";
import Loader from "./components/Loader.jsx";
import { getDog } from "./api/index";
import { setDogs, setLoading } from "./redux/actions/actions.js";
import "./App.css";

function App() {
  const dogs = useSelector((state) => state.dogs);
  const searchDogs = useSelector((state) => state.searchDogs);
  const loading = useSelector((state) => state.loading);
  const filtering = useSelector((state) => state.filtering);
  const dispatch = useDispatch();

  //Funcion que llama la api
  useEffect(() => {
    const fetchDogs = async () => {
      dispatch(setLoading(true));
      const dogsRes = await getDog();
      dispatch(setDogs(dogsRes));
      dispatch(setLoading(false));
    };
    fetchDogs();
  }, [filtering]);

  return (
    <div>
      <div className="app">
        <Searcher dogs={dogs} />
        {loading ? <Loader /> : <Cards dogs={filtering ? searchDogs : dogs} />}
      </div>
    </div>
  );
}

export default App;
