import Globals from "./components/Global/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import ColleagueSnap from "./pages/CollieagueSnap";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globals />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/colleague" element={<ColleagueSnap />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
