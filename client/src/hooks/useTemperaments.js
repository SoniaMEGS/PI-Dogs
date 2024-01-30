import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const useTemperaments = () => {
  const dogs = useSelector((state) => state.dogs);
  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    const fetchTemperaments = async () => {
      const temperamentsArray = await dogs.map((temp) => {
        return temp.temperament;
      });

      const allTemperaments = await [
        ...new Set(temperamentsArray.join(", ").split(", ")),
      ];

      const data = await allTemperaments.filter((element) => element !== "");

      setTemperaments(data);
    };

    fetchTemperaments();
  }, []);

  // Utilizamos useMemo para memoizar la lista de temperamentos
  const memoizedTemperaments = useMemo(() => temperaments, [temperaments]);

  return memoizedTemperaments;
};

export default useTemperaments;
