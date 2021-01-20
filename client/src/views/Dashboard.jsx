import React from 'react'
import apiHandler from '../api/apiHandler'
import DisplayArticles from '../components/DisplayArticles';

class Dashboard extends React.Component {
  
  state = {
    articles: [],
  };

  componentDidMount() {
    apiHandler.getArticle().then((data) => {
      console.log('DATA',data.value)
      this.setState({ articles: data.value });
    });
  }

  render() {
    
    return (
      <div>
        <h1>My Dashboard</h1>
          {/* <DisplayArticles /> */}
      </div>
    )
  }
}

export default Dashboard
