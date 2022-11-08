import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact render={() => <Home />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
