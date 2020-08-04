import React, { useState, useEffect } from "react";

type Props = {
  data: any[];
  perPage: number;
  wrapperClass?: string;
};

const Pagination: React.FC<Props> = ({ data, perPage, wrapperClass }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);

  //! При добавлении TODO не обновляется список

  useEffect(() => {
    console.log(data.length);
    
  }, [])

  const getArrays = () => (
    <div className="pagination-actions">
      {currentPage !== 0 && <button onClick={goPrevPage}>Prev Page</button>}
      <button className="current-page__btn">{currentPage + 1}</button>
      {offset + perPage <= data.length - 1 && (
        <button onClick={goNextPage}>Next page</button>
      )}
    </div>
  );

  const goNextPage = () => {
    if (offset + perPage >= data.length - 1) return;
    setOffset(offset + perPage);
    setCurrentPage(currentPage + 1);
  };

  const goPrevPage = () => {
    if (currentPage === 0) return;
    setOffset(offset - perPage);
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={wrapperClass ? `${wrapperClass}` : "paginator"}>
      {data.slice(offset, offset + perPage)}
      {getArrays()}
    </div>
  );
};

export default Pagination;
