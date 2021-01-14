import React from "react";
import axios from "axios";

class Article extends React.Component {
  render() {
    const extractInformation = this.props.location.info;
    // console.log("REPONSE", this.props.location.info);
    return (
      <div>
        <h1>Article</h1>
        <img
          src={extractInformation.image}
          alt={this.props.location.info.name}
        />
        <div className="information">
          <h2>{extractInformation.title}</h2>
          <p>{extractInformation.description}</p>
          <p>{extractInformation.author}</p>
          <a href={extractInformation.url} target="_blank">
            Link to the article
          </a>
        </div>
      </div>
    );
  }
}
export default Article;
