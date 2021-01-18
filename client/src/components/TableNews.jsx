import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class TableNews extends Component {
  state = {
    infos: [],
    searchInfo: "",
  };

  handleClick(event) {
    // console.log("My info", event);
  }

  // handleChange(event) {
  //   console.log("calling", event.target);
  //   this.setState({ searchInfo: event.target.value });
  // }

  handleSearch = (searchValue) => {
    let searchNews = searchValue;
    axios
      .get(
        `https://api.currentsapi.services/v1/search?keywords=${searchNews}&apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9`
      )
      .then((responseFromApi) => {
        // console.log("response from api ->", responseFromApi);
        this.setState({
          infos: responseFromApi.data.news,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    axios
      .get(
        "https://api.currentsapi.services/v1/latest-news?apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9"
      )
      .then((responseFromApi) => {
        // console.log("response from api ->", responseFromApi);
        this.setState({
          infos: responseFromApi.data.news,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>News</h2>
        <SearchBar
          // handleChange={(event) => this.handleSearch(event.target.value)}
          handleChange={(event) => {
            // console.log(event.target.value)
            this.setState({ searchInfo: event.target.value });
            console.log(this.state.searchInfo);
          }}
          handleSearch={() => this.handleSearch(this.state.searchInfo)}
        />

        {this.state.infos.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.image} alt={info.name} />
              <Link
                to={{
                  pathname: `/article/${info.id}`,
                  info,
                }}
              >
                <h3 onClick={() => this.handleClick(info)}> {info.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableNews;
