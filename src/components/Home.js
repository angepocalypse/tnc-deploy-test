import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import ImageCard from "./ImageCard";
import CustomData from "../data/customData";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push("/");
  }
  state = {
    images: [CustomData]
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div style={{ marginTop: "10px", justifyContent: "center" }}>
        <ImageCard key="tnc1" image={{ urls: { regular: "largePic1.jpg" } }} />
        {/* <ImageList images={this.state.images} /> */}
      </div>
    );
  }
}

export default Home;
