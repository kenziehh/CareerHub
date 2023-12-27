import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./layouts/About";
import Perusahaan from "./layouts/Perusahaan";
import GlobalLayout from "./layouts/GlobalLayout";
import Home from "./layouts/Home";
import Navbar from "./components/Navbar";
import NonFooter from "./layouts/NonFooter";
import Bantuan from "./layouts/Bantuan";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bantuan" element={<Bantuan/>} />
        </Route>
        <Route element={<NonFooter />}>
          <Route path="/perusahaan" element={<Perusahaan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
