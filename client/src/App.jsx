import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Cards from "./components/Cards";
import Loader from "./components/Loader.jsx";
import NavBar from "./components/NavBar.jsx";
import DetailData from "./components/DetailData.jsx";
import Form from "./components/Form.jsx";
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
        <NavBar />
        <Routes>
          <Route
            path="/home"
            element={
              loading ? (
                <Loader />
              ) : (
                <Cards dogs={filtering ? searchDogs : dogs} />
              )
            }
          />
          <Route path="/detail/:name" element={<DetailData />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
