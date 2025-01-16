import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layouts";

import NotFound from "./Pages/NotFound";
import Beranda from "./Pages/Beranda";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Beranda />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
