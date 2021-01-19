import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../api/apiHandler";

// // Add the logic
class BtnAdd extends React.Component {
  //   state = {
  //     info: [],
  //   };

  handleClick = () => {
    // console.log("Clicked here", this.props.match);
    console.log("Clicked", this.props.match.params.id);
    const articleId = this.props.match.params.id;
    apiHandler
      .transferId(articleId)
      .then((data) => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   handleClickBtn = (article) => {
  //     apiHandler
  //       .transferArticle(article)
  //       .then((data) => {
  //         console.log(`data:`, data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  render() {
    return (
      <button onClick={() => this.handleClickBtn()} className="Btn">
        Add this article
      </button>
    );
  }
}

export default withRouter(BtnAdd);
