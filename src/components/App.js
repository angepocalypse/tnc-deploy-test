import React from "react";
import Home from "./Home";
import Wedding from "./Wedding";
import Title from "./Title";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wedding" component={Wedding} />
          <Route render={() => <h3>Not Found</h3>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
