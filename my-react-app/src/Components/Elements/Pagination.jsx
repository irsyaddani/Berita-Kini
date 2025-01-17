import PropTypes from "prop-types";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  itemsPerPage,
}) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 3 || currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-4">
      <span className="order-2 md:order-1 text-body-md text-[#333333]">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
        results
      </span>

      <div className="order-1 md:order-2 flex items-center space-x-5">
        <button
          className={`flex items-center gap-[6px] ${
            currentPage === 1 && "cursor-not-allowed"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeftShort
            color="#526071"
            style={{ width: "16px", height: "16px" }}
          />

          <span className="hidden lg:inline text-body-md text-[#526071] hover:font-bold transition-all ease-out duration-300">
            Previous
          </span>
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`w-8 h-8 text-body-md-medium ${
              page === currentPage
                ? "bg-primary-500 text-white"
                : `bg-transparent text-[#526071] ${
                    typeof page === "number" &&
                    "hover:bg-primary-500 hover:text-white"
                  }`
            } rounded-lg transition-all duration-300 ease-out`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}

        <button
          className={`flex items-center gap-[6px] ${
            currentPage === totalPages && "cursor-not-allowed"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="hidden lg:inline text-body-md text-[#526071] hover:font-bold transition-all ease-out duration-300">
            Next
          </span>

          <ArrowRightShort
            color="#526071"
            style={{ width: "16px", height: "16px" }}
          />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
