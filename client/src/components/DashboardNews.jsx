import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

class DashboardAllNews extends Component {
  state = {
    articles: [],
  };
  componentDidMount(allNews) {
    apiHandler.getArticle(allNews).then((response) => {
      this.setState({ articles: response.data });
    });
  }
  render() {
    return (
      <div className="Dashb">
        {this.state.articles.map((article) => (
          <div>{article.title}</div>
        ))}
      </div>
    );
  }
}
export default DashboardAllNews;
