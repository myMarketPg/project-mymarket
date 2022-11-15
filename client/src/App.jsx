import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";
import Register from "./Components/Registro/Registro";

import SellerDashboard from "./Components/SellerProfile/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={SellerDashboard} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/sobrenosotros" component={Register} />
        <Route exact path="/login" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
