import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";
import DashboardSeller from "./Components/DashboardSeller/DashboardSeller";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/sellerprofile" render={() => <DashboardSeller />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
