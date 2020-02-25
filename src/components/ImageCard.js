import React from "react";
import { Redirect } from "react-router-dom";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
      cards: [{ wedding: false }, { details: false }, { registry: false }]
    };

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

  onCardClick = () => {
    let imageId = this.props.image.id;
    console.log(imageId);
    switch (imageId) {
      case "0":
        this.setState({ wedding: true });
        break;
      case "1":
        this.setState({ details: true });
        break;
      case "2":
        this.setState({ registry: true });
        break;
      default:
        break;
    }
  };

  render() {
    const { description, urls } = this.props.image;

    if (this.state.wedding === true) {
      return <Redirect to="/wedding" />;
    }

    return (
      <div onClick={this.onCardClick}>
        <div>
          <div>
            <div>
              <img
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
