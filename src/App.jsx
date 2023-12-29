import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./layouts/About";
import Perusahaan from "./layouts/Perusahaan";
import GlobalLayout from "./layouts/GlobalLayout";
import Home from "./layouts/Home";
import NonFooter from "./layouts/NonFooter";
import Bantuan from "./layouts/Bantuan";
import Interview from "./layouts/About/Interview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bantuan">
            <Route index element={<Bantuan />} />
            <Route path="/bantuan/interview" element={<Interview />} />
            <Route path="/bantuan/cv" element={<Interview />} />
            <Route path="/bantuan/workshop" element={<Interview />} />
          </Route>
        </Route>
        <Route element={<NonFooter />}>
          <Route path="/perusahaan" element={<Perusahaan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
