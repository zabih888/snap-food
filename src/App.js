import Globals from "./components/Global/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Globals />
      <Home />
    </BrowserRouter>
  );
}

export default App;
