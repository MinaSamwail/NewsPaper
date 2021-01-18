import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import apiHandler from "../api/apiHandler";

// Add the logic
class BtnAdd extends React.Component {
  state = {
    infos: [],
  };

  handleClick = () => {
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

  render() {
    return (
      <button onClick={this.handleClick} className="Btn">
        Add this article
      </button>
    );
  }
}

export default withRouter(BtnAdd);
