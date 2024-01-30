import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
("react-router-dom");
import { getDog } from "../api/index";
import { setDogs, setLoading } from "../redux/actions/actions.js";
import Loader from "../components/Loader.jsx";
import Searcher from "../components/Searcher.jsx";
import Filter from "../components/Filter.jsx";
import Cards from "../components/Cards";

const Home = () => {
  const dogs = useSelector((state) => state.dogs);
  const searchDogs = useSelector((state) => state.searchDogs);
  const loading = useSelector((state) => state.loading);
  const filtering = useSelector((state) => state.filtering);
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  //Funcion que llama la api
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      const dogsRes = await getDog();
      dispatch(setDogs(dogsRes));
      dispatch(setLoading(false));
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <>
      <div className="searcherFilter">
        <Searcher />
        <Filter />
      </div>
      <Cards dogs={filtering || sorting ? searchDogs : dogs} />
    </>
  );
};

export default Home;
