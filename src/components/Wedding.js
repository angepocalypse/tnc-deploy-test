import React from "react";
import "../css/Wedding.css";

class Wedding extends React.Component {
  render() {
    return (
      <div className="wedding">
        <div className="ui people shape">
          <div className="sides">
            <div className="side active">
              <div>
                <p>--- Hidden Villa ---</p>
                <p2>26870 Moody Rd</p2>
                <p>Los Altos Hills, CA 94022</p>
                <br />
                <p>Attire: Semi-formal</p>
              </div>
            </div>
            <div className="side">hello</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;
