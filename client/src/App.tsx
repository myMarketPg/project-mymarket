import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";
import Register from "./Components/Registro/Registro";

import SellerDashboard from "./Components/SellerProfile/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/admin" render={() => <SellerDashboard />} />
        <Route exact path="/registro" render={() => <Register />} />
        <Route exact path="/sobrenosotros" render={() => <Register />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
