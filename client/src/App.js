import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Components/Home/Home";

function App(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Home />} />
            </Switch>
        </div>
    );
}

export default App;
