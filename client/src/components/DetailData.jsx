import { useEffect, useState } from "react";
import CardDetail from "./CardDetail.jsx";
import Loader from "./Loader.jsx";
import { getDogByName } from "../api/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/actions/actions.js";

const DetailData = () => {
  const [dogDetails, setDogDetails] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  let { name } = useParams();

  useEffect(() => {
    const fetchDogDetails = async () => {
      dispatch(setLoading(true));
      try {
        const dogsRes = await getDogByName({ name });
        if (dogsRes[0].name) {
          setDogDetails(dogsRes[0]);
        } else {
          window.alert("No hay perros con ese nombre");
        }
      } catch (error) {
        console.log(error);
        window.alert("No hay perros con ese nombre");
      }
      dispatch(setLoading(false));
    };
    fetchDogDetails();

    return setDogDetails({});
  }, [name]);

  if (loading) return <Loader />;

  return (
    <div>
      <CardDetail dogDetails={dogDetails} />
    </div>
  );
};

export default DetailData;
