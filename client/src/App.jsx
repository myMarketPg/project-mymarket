import { Route, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Home from "./Components/Home/Home";
import Register from "./Components/Registro/Registro";
import SellerDashboard from "./Components/SellerProfile/SellerDashboard";
import BuyerProfile from "./Components/BuyerProfile/BuyerProfile";
import Login from "./Components/Login/Login";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./Context/authContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ProtectedRoute>
          <Route exact path="/" render={() => <Home />} />
        </ProtectedRoute>
        <Route exact path="/product" render={() => <ProductDetail />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/registrate" render={() => <Register />} />
        <Route exact path="/admin" render={() => <SellerDashboard />} />
        <Route exact path="/sobrenosotros" render={() => <About />} />
        <Route exact path="/contacto" render={() => <About />} />
        <Route exact path="/user/:id" render={() => <BuyerProfile />} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
