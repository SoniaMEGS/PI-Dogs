import "../style/CardDetail.css";

const CardDetail = ({ dogDetails }) => {
  const { id, name, image, temperament, weight, height, life_span } =
    dogDetails;

  return (
    <section id={id} className="cardDetail">
      <div className="cardDetailContainer">
        <div className="cardDetailContainer_img">
          <img
            src={image?.url}
            alt={name}
            className="cardDetailContainer_img-dogs"
          />
        </div>
        <div className="cardDetailContainer_p">
          <p className="cardDetailContainer_p-text">
            <span>ID: </span>
            {id}
          </p>
          <p className="cardDetailContainer_p-text">
            <span>Name: </span>
            {name}
          </p>
          <p className="cardDetailContainer_p-text">
            <span>Height (cm): </span>
            {height?.metric}
          </p>
          <p className="cardDetailContainer_p-text">
            <span>Weight (kg): </span>
            {weight?.metric}
          </p>
          <p className="cardDetailContainer_p-text">
            <span>Temperament: </span>
            {temperament}
          </p>
          <p className="cardDetailContainer_p-text">
            <span>Life span: </span>
            {life_span}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
