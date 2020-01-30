import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ComingSoon from "./ComingSoon";
import CustomData from "../data/customData";

class App extends React.Component {
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
    console.log(this.state);
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", justifyContent: "center" }}
      >
        <ComingSoon />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
