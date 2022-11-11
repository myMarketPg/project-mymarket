import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";
import SellerDashboard from "./Components/DashboardSeller/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/sellerprofile" render={() => <SellerDashboard />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
