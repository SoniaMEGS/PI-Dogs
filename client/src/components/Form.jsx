import React from "react";
import { useSelector } from "react-redux";
import validation from "./validatios";
import "../style/Form.css";

const Form = () => {
  const formValues = {
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
  };
  const [dogData, setDogData] = React.useState(formValues);
  const [errors, setErrors] = React.useState(formValues);
  const [newDogs, setNewDogs] = React.useState([]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "temperaments") {
      const selectedTemperaments = dogData.temperaments.includes(value)
        ? dogData.temperaments.filter((option) => option !== value)
        : [...dogData.temperaments, value];

      setDogData({ ...dogData, temperaments: selectedTemperaments });
    } else {
      setDogData({ ...dogData, [name]: value });
    }
    setErrors(
      validation({
        ...dogData,
        [name]: value,
      })
    );
    //console.log(dogData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dogData);
    setNewDogs([...newDogs, dogData]); // Agrega el objeto dogData actual al estado newDogs
    console.log(newDogs); // Muestra el estado newDogs en la consola
    setDogData(formValues); // Restablece los valores del formulario a los valores iniciales
  };

  const dogs = useSelector((state) => state.dogs);
  const temperamentsArray = dogs.map((temp) => {
    return temp.temperament;
  });
  const allTemperaments = [
    ...new Set(temperamentsArray.join(", ").split(", ")),
  ];
  const temperaments = allTemperaments.filter((element) => element !== "");
  //console.log(temperaments);

  return (
    <div>
      <form className="newDogForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            key="name"
            value={dogData.name}
            onChange={handleChange}
            placeholder="Dog's breed..."
          />
        </label>
        {dogData.name && errors.name && <p>{errors.name}</p>}
        <label>
          Height:
          <input
            type="text"
            name="height"
            key="height"
            value={dogData.height}
            onChange={handleChange}
            placeholder="Ej. 12 - 15"
          />
        </label>
        {dogData.height && errors.height && <p>{errors.height}</p>}
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            key="weight"
            value={dogData.weight}
            onChange={handleChange}
            placeholder="Ej. 4.5 - 5"
          />
        </label>
        {dogData.weight && errors.weight && <p>{errors.weight}</p>}
        <label>
          Life span:
          <input
            type="text"
            name="lifeSpan"
            key="lifeSpan"
            value={dogData.lifeSpan}
            onChange={handleChange}
            placeholder="Ej. 10 - 12 years"
          />
        </label>
        {dogData.lifeSpan && errors.lifeSpan && <p>{errors.lifeSpan}</p>}
        <label className="newDogForm_temperament">
          <span>Temperament:</span>
          <div>
            {temperaments.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`option${index}`}
                  name="temperaments" // Cambiamos el valor del atributo name a "temperaments"
                  value={item}
                  checked={dogData.temperaments.includes(item)} // Utilizamos dogData.temperaments para verificar si el temperamento está seleccionado
                  onChange={handleChange} // Usamos la misma función handleChange para manejar los cambios
                />
                <label htmlFor={`option${index}`}>{item}</label>
              </div>
            ))}
          </div>
        </label>
        <button
          className="newDogForm_button"
          type="button"
          onClick={handleSubmit}
          disabled={
            !dogData.name ||
            !dogData.height ||
            !dogData.weight ||
            !dogData.lifeSpan ||
            errors.name ||
            errors.height ||
            errors.weight ||
            errors.lifeSpan ||
            dogData.temperaments.length === 0
          }
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
