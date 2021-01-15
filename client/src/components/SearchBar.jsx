import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  state = {
    infos: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.currentsapi.services/v1/search?apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9"
      )
      .then((responseFromApi) => {
        console.log("response from api ->", responseFromApi.data.news);
        this.setState({
          infos: responseFromApi.data.news,
        });
      });
  }

  render() {
    // return (
    //   <form>
    //     <input className="searchbar" type="text" placeholder="Research..." />
    //     {/* <input className="search-btn" type="submit" value="Search" /> */}
    //   </form>
    // );
  }
}

export default SearchBar;
