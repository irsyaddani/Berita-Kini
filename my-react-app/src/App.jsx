import { BrowserRouter as Router, Routes, Route } from "react-router";

import routes from "./Routes/Routes";
import ScrollToTop from "./Utils/ScrollToTop";
import Layout from "./Components/Layouts";
import NotFound from "./Pages/NotFound";
import Beranda from "./Pages/Beranda";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="/" element={<Beranda />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
