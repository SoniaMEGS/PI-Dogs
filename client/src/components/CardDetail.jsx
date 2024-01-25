import "../style/Card.css";

const CardDetail = ({ dogDetails }) => {
  const { id, name, image, temperament, weight, height, life_span } =
    dogDetails;

  return (
    <div id={id} className="cardContainer">
      <img src={image?.url} alt={name} />
      <p>
        <span>ID: </span>
        {id}
      </p>
      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Height (cm): </span>
        {height?.metric}
      </p>
      <p>
        <span>Weight (kg): </span>
        {weight?.metric}
      </p>
      <p>
        <span>Temperament: </span>
        {temperament}
      </p>
      <p>
        <span>Life span: </span>
        {life_span}
      </p>
    </div>
  );
};

export default CardDetail;
