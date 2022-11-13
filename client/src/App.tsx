import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";

import SellerDashboard from "./Components/SellerProfile/SellerDashboard";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/admin" render={() => <SellerDashboard />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
