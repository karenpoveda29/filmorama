import "./pagination.css";

//Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({page, onPreviousPage, onNextPage}) => {
  return (
    <div className="pagination">
      <button type="button" disabled={page === 1} className="pagination__btn pagination__btn-previous" onClick={onPreviousPage}>
        <BsArrowLeft className="pagination__btn-icon"/>
      </button>
      <button type="button" className="pagination__btn" onClick={onNextPage}>
        <BsArrowRight className="pagination__btn-icon"/>
      </button>
    </div>
  );
};

export default Pagination;
