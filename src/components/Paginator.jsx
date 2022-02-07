import React from "react";

const Paginator = (skip, limit, url, setterFunction) => {
  const handleFetchNextRecords = (e) => {
    e.preventDefault();
  };

  const handleFetchPrevRecords = (e) => {
    e.preventDefault();
  };

  return (
    <div className="paginator__main-container">
      <button
        className="paginator__pagination-button"
        onClick={handleFetchNextRecords}
        disabled={skip <= 0}
      >
        <i class="fas fa-arrow-circle-left store-catalog__icon-pagination"></i>
        Anterior
      </button>
      <button
        className="paginator__pagination-button"
        onClick={handleFetchPrevRecords}
      >
        Siguiente
        <i class="fas fa-arrow-circle-right store-catalog__icon-pagination"></i>
      </button>
    </div>
  );
};

export default Paginator;

/**const usePagination = (skip, limit, url, setterFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
        const response = await fetch(url)
        return await response.json();
    } catch(e) {
        Swal.fire({
          title: "Error en la búsqueda",
          text: "Al parecer hubo un error en la búsqueda solicitada, intente nuevamente.",
          timer: 2000,
        });
    }
  }, [url]);

  return { data, error };
};
export default usePagination; */
