import { Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
//momentaneamente, dsps lo cambiamos por el detail cuando este hecho el componente
import Home from "./Components/Home/Home";
import Register from "./Components/Registro/Registro";
import SellerDashboard from "./Components/SellerProfile/SellerDashboard";
import BuyerProfile from "./Components/BuyerProfile/BuyerProfile";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <Home />} />
                <Route
                    exact
                    path="/product"
                    render={() => <ProductDetail />}
                />
                <Route exact path="/admin" render={() => <SellerDashboard />} />
                <Route exact path="/sobrenosotros" render={() => <About />} />
                <Route exact path="/contacto" render={() => <About />} />
                <Route exact path="/user/:id" render={() => <BuyerProfile />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
