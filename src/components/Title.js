import "../css/Title.css";
import React from "react";
import { Link } from "react-router-dom";

class ComingSoon extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="coming-soon">Coming Soon!</div>
      </Link>
    );
  }
}

export default ComingSoon;
