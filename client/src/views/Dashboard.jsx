import React from "react";
import apiHandler from "../api/apiHandler";
import DisplayArticles from "../components/DisplayArticles";
import UserContext from "../components/Auth/UserContext";

class Dashboard extends React.Component {
  static contextType = UserContext;
  state = {
    articles: [],
  };

  componentDidMount() {
    console.log("JE SUIS LA");
    apiHandler.getArticle().then((data) => {
      console.log("DATA", data);
      this.setState({ articles: data });
    });
  }

  render() {
    return (
      <div>
        <h1>My Dashboard</h1>
        {this.state.articles.map((article) => {
          return (
            <div>
              <img
                src={article.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg";
                }}
                alt="Article"
              />
              <div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>{article.author}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  link of the article
                </a>
                <button>DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
