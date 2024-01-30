import React from "react";
import { useSelector, useDispatch } from "react-redux";
import validation from "../components/validatios";
import useTemperaments from "../hooks/useTemperaments.js";
import { setSearchDog, setLoading } from "../redux/actions/actions.js";
import "../style/Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useTemperaments();
  const dogs = useSelector((state) => state.dogs);
  const formValues = {
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
  };
  const [dogData, setDogData] = React.useState(formValues);
  const [errors, setErrors] = React.useState(formValues);
  //const [newDogs, setNewDogs] = React.useState([]);

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
  };

  const generateNewDog = (values) => {
    const newDog = {
      id: 0,
      name: "",
      image: {
        url: "https://cdn-icons-png.freepik.com/512/8708/8708467.png",
      },
      height: {
        metric: "",
      },
      weight: {
        metric: "",
      },
      lifeSpan: "",
      temperaments: "",
    };
    // Calculamos el ID del nuevo perro añadiendo 1 a la
    // cantidad total de dogs del estado
    const dogId = dogs.length + 1;
    // Creamos nuestro nuevo dog con los valores del form
    const { temperaments, weight, height, name, lifeSpan } = values;
    const dogTemperaments = temperaments.join(", ");
    // Asignamos el ID a nuestro nuevo dog.
    newDog.id = dogId;
    // Asignamos la lista de Temps. pero en String al nuevo dog
    newDog.temperaments = dogTemperaments;
    newDog.name = name;
    newDog.lifeSpan = lifeSpan;
    newDog.weight.metric = weight;
    newDog.height.metric = height;

    return newDog;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Datos del estado actual
    console.log(dogData);
    // Creamos un array con todos los dogs del estado.
    const dogsRes = [...dogs];
    const newDog = generateNewDog(dogData);
    console.log(newDog);
    // Añadimos nuestro nuevo dog al array clon de dogs del state.
    dogsRes.push(newDog);
    // Restablece los valores del formulario a los valores iniciales
    setDogData(formValues);
  };

  return (
    <section className="container">
      <form className="newDogForm">
        <div className="newDogForm_title">
          <h2>Create a new dog breed</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2097/2097759.png"
            alt=""
          />
        </div>
        <label className="newDogForm_label">
          <p className="newDogForm_label-name">Name:</p>
          <input
            className="newDogForm_label-input"
            type="text"
            name="name"
            key="name"
            value={dogData.name}
            onChange={handleChange}
            placeholder="Dog's breed..."
          />
        </label>
        {dogData.name && errors.name && (
          <p className="errorMessage">{errors.name}</p>
        )}
        <label className="newDogForm_label">
          <p className="newDogForm_label-height">Height:</p>
          <input
            className="newDogForm_label-input"
            type="text"
            name="height"
            key="height"
            value={dogData.height}
            onChange={handleChange}
            placeholder="Ej. 12 - 15"
          />
        </label>
        {dogData.height && errors.height && (
          <p className="errorMessage">{errors.height}</p>
        )}
        <label className="newDogForm_label">
          <span className="newDogForm_label-weight">Weight:</span>
          <input
            className="newDogForm_label-input"
            type="text"
            name="weight"
            key="weight"
            value={dogData.weight}
            onChange={handleChange}
            placeholder="Ej. 4.5 - 5"
          />
        </label>
        {dogData.weight && errors.weight && (
          <p className="errorMessage">{errors.weight}</p>
        )}
        <label className="newDogForm_label">
          <span className="newDogForm_label-lifeSpan">Life span:</span>
          <input
            className="newDogForm_label-input"
            type="text"
            name="lifeSpan"
            key="lifeSpan"
            value={dogData.lifeSpan}
            onChange={handleChange}
            placeholder="Ej. 10 - 12 years"
          />
        </label>
        {dogData.lifeSpan && errors.lifeSpan && (
          <p className="errorMessage">{errors.lifeSpan}</p>
        )}
        <label className="newDogForm_label">
          <p className="newDogForm_label-temperament">Temperament:</p>
          <div className="newDogForm_temperament">
            {temperaments.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`option${index}`}
                  name="temperaments"
                  value={item}
                  checked={dogData.temperaments.includes(item)} // Utilizamos dogData.temperaments para verificar si el temperamento está seleccionado
                  onChange={handleChange} // Usamos la misma función handleChange para manejar los cambios
                />
                <label htmlFor={`option${index}`}>{item}</label>
              </div>
            ))}
          </div>
        </label>
        <div className="buttonContainer">
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
        </div>
      </form>
    </section>
  );
};

export default Form;
