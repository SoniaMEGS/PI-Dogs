import React from "react";
import "../style/Paginated.css";

const Paginated = (props) => {
  const { dogsPerPage, currentPage, setCurrentPage, dogs } = props;
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
      <button href="" onClick={goToPrevious}>
        Previous
      </button>
      <ul className="paginated_list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <button href="" onClick={() => goToSpecific(noPage)}>
              {noPage}
            </button>
          </li>
        ))}
      </ul>
      <button href="" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Paginated;
