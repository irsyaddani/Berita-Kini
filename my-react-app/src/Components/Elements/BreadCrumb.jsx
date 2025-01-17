import PropTypes from "prop-types";
import { Link } from "react-router";
import routes from "../../Routes/Routes";

import { House, ChevronRight } from "react-bootstrap-icons";

const Breadcrumb = ({ category }) => {
  const categoryRoute = routes.find((route) => route.name === category);

  if (!categoryRoute) {
    console.error(`Category route not found for category: ${category}`);
    return null;
  }

  return (
    <section className="w-full flex items-center space-x-3 text-body-sm md:text-body-md lg:text-body-lg text-[#333333]">
      <House />

      <Link to={"/"}>Beranda</Link>

      <ChevronRight color="#828282" />

      <Link to={categoryRoute.path}>{category}</Link>

      <ChevronRight color="#828282" />

      <span>Detail</span>
    </section>
  );
};

Breadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Breadcrumb;
