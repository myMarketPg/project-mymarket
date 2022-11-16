import { Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import CardProduct from "./Components/CardProduct/CardProduct";
//momentaneamente, dsps lo cambiamos por el detail cuando este hecho el componente
import Home from "./Components/Home/Home";
import Register from "./Components/Registro/Registro";
import SellerDashboard from "./Components/SellerProfile/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/product/:id" render={() => <CardProduct />} />
        <Route exact path="/admin" render={() => <SellerDashboard />} />
<<<<<<< HEAD
        <Route exact path="/registro" render={() => <Register />} />
        <Route exact path="/sobrenosotros" render={() => <About />} />
=======
        <Route exact path="/sobrenosotros" render={() => <About />} />
        <Route exact path="/contacto" render={() => <About />} />
>>>>>>> dev
      </div>
    </BrowserRouter>
  );
}

export default App;
