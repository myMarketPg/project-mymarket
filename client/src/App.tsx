
import {  Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact render={() => <Home />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
