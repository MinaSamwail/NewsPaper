import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class TableNews extends Component {
  state = {
    infos: [],
    // selectedInfo: null,
  };

  handleClick(event) {
    console.log("My info", event);
  }

  componentDidMount() {
    axios
      .get(
        "https://api.currentsapi.services/v1/latest-news?apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9"
      )
      .then((responseFromApi) => {
        console.log("response from api ->", responseFromApi.data.news);
        this.setState({
          infos: responseFromApi.data.news,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>News</h2>
        <SearchBar />
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
