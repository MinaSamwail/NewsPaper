import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import apiHandler from "../api/apiHandler";

import "../styles/tableNews.css";

class TableNews extends Component {
  state = {
    infos: [],
    searchInfo: "",
  };

  handleClick(event) {
    // console.log("My info", event);
  }

  handleClickBtn = (article) => {
    apiHandler
      .transferArticle(article)
      .then((data) => {
        console.log(`data:`, data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <img
                src={info.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg";
                }}
                alt="Article"
              />
              <Link
                to={{
                  pathname: `/article/${info.id}`,
                  info,
                }}
              >
                <h3 onClick={() => this.handleClick(info)}> {info.title}</h3>
              </Link>
              <button onClick={() => this.handleClickBtn(info)}>
                Add this article
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableNews;
