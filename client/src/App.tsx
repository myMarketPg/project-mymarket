import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";
import SellerProfile from "./Components/SellerProfile/SellerProfile";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <Home />} />
                <Route
                    exact
                    path="/sellerprofile"
                    render={() => <SellerProfile />}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
