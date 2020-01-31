import React from "react";
import Home from "./Home";
import Wedding from "./Wedding";
import Title from "./Title";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <Router>
        <Title />
        <Route exact path="/" component={Home} />
        <Route path="/wedding" component={Wedding} />
      </Router>
    );
  }
}

export default App;
