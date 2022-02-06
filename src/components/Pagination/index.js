const Pagination = ({page, onPreviousPage, onNextPage}) => {
  return (
    <div>
      <button type="button" disabled={page === 1} onClick={onPreviousPage}>
        Previous
      </button>
      <button type="button" onClick={onNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
