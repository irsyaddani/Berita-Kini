import PropTypes from "prop-types";
import { Search } from "react-bootstrap-icons";

import Header from "./Header";
import Loader from "./Loader";
import Card from "./Card";
import Pagination from "./Pagination";

const NewsGrid = ({
  category,
  isLoading,
  posts,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  searchQuery,
  setSearchQuery,
}) => {
  const currentItems = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full flex flex-col space-y-11 animate-fade-in">
      <div className="w-full flex flex-col md:flex-row md:justify-between lg:items-center gap-3">
        <Header title={category} />

        {setSearchQuery && (
          <div className="input-field-v1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Cari disini..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button>
              <Search />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center space-y-8 lg:space-y-16">
        {isLoading && <Loader />}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-8 lg:gap-16">
          {currentItems.map((item, index) => (
            <Card key={index} item={{ ...item, category: item.category }} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          totalItems={totalItems}
          onPageChange={onPageChange}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

NewsGrid.propTypes = {
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default NewsGrid;
