import React from "react";
import "../style/Paginated.css";

const Paginated = (props) => {
  const { dogsPerPage, currentPage, setCurrentPage, dogs } = props;
  // Verifica si dogs está definido y tiene contenido
  if (!dogs || dogs.length === 0) {
    return null; // Renderiza null si no hay datos disponibles
  }
  const totalDogs = dogs.length;
  const pageNumbers = [];

  const numberOfPages = Math.ceil(totalDogs / dogsPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevious = () => {
    if (currentPage == 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNext = () => {
    if (currentPage == numberOfPages) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToSpecific = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="paginated">
      <button className="paginated_prev" href="" onClick={goToPrevious}>
        Previous
      </button>
      <ul className="paginated_list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <button
              className={`paginated_list-num${
                currentPage === noPage ? "--active" : ""
              }`}
              href=""
              onClick={() => goToSpecific(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}
      </ul>
      <button className="paginated_next" href="" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Paginated;
