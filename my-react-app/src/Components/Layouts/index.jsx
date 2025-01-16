import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="mt-[97px] lg:mt-[72px] p-8 lg:p-[72px]">{children}</div>
      {/* <div className="p-8 lg:p-[72px]">{children}</div> */}
      <Footer />
    </main>
  );
};

// Layout.propTypes = {
//   children: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default Layout;
