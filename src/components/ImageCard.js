import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div className="ui people shape" onClick={this.onCardClick}>
        <div className="sides">
          <div className="side active">
            <div
              className="ui large fade reveal image"
              style={{ gridRowEnd: `span ${this.state.spans}` }}
            >
              <img
                className="visible content"
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
              ></img>
              <img
                className="hidden content"
                ref={this.imageRef}
                alt={description}
                src={urls.reveal}
              />
            </div>
          </div>
          <div className="side">hello</div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
