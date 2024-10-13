import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
