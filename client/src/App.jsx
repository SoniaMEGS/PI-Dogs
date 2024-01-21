import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";
import Loader from "./components/Loader.jsx";
import { getDog } from "./api/index";
import { setDogs, setLoading } from "./redux/actions/actions.js";
import "./App.css";

function App() {
  const dogs = useSelector((state) => state.dogs);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  //const [dogs, setDogs] = useState([]);

  //Funcion que llama la api
  useEffect(() => {
    const fetchDogs = async () => {
      dispatch(setLoading(true));
      const dogsRes = await getDog();
      dispatch(setDogs(dogsRes));
      dispatch(setLoading(false));
    };
    fetchDogs();
  }, []);

  return (
    <div>
      <div className="app">
        <Searcher />
        {loading ? <Loader /> : <Cards dogs={dogs} />}
      </div>
    </div>
  );
}

export default App;
