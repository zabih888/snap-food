import Globals from "./components/Global/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import ColleagueSnap from "./pages/CollieagueSnap";

function App() {
  return (
    <BrowserRouter>
      <Globals />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/colleague" element={<ColleagueSnap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
