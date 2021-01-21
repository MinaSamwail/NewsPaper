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
    selectValue: "",
  };

  handleSelect = (e) => {
    console.log("selected", e.target.value);
    this.setState({
      selectValue: e.target.value,
    });
    e.preventDefault();
    // let valueSelected = this.state.selectValue;
    console.log("SELECTION", e.target.value);
    axios
      .get(
        `https://api.currentsapi.services/v1/search?language=${e.target.value}&apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9`
      )
      .then((responseFromApi) => {
        console.log("response from api", responseFromApi);
        this.setState({
          infos: responseFromApi.data.news,
        });
      })
      .catch((error) => console.log(error));
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

  handleChange = (event) => {
    console.log("ICI", event.target.value);
    this.setState({
      searchInfo: event.target.value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    let searchNews = this.state.searchInfo;
    console.log("SEARCH", searchNews);
    axios
      .get(
        `https://api.currentsapi.services/v1/search?keywords=${searchNews}&apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9`
      )
      .then((responseFromApi) => {
        console.log("response from api ->", responseFromApi);
        this.setState({
          infos: responseFromApi.data.news,
          searchInfo: "",
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
        this.setState({
          infos: responseFromApi.data.news,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Latest News</h2>
        <div>
          <label htmlFor="select-lang">Chose your language</label>
          <select
            name="language"
            // onSelect={this.handleSelect}
            onChange={this.handleSelect}
            id="select-lang"
          >
            <option value="">-- Select a language --</option>

            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="msa">Malay</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <SearchBar
          handleChange={this.handleChange}
          searchInfo={this.state.searchInfo}
          handleSearch={this.handleSearch}
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
