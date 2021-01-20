import React from 'react'
import apiHandler from '../api/apiHandler'
import DisplayArticles from '../components/DisplayArticles';

class Dashboard extends React.Component {
  
  state = {
    articles: [],
  };

  componentDidMount() {
    apiHandler.getArticle().then((data) => {
      console.log('DATA',data)
     this.setState({ articles: data });
    });
  }

  render() {
    
    return (
     
      <div>
        <h1>My Dashboard</h1>
        {this.state.articles.map((article)=>{
         return(
           <div>
           <img src={article.image} atl={article.title} />
           <div>
           <h2>{article.title}</h2>
           <p>{article.description}</p>
           <p>{article.author}</p>
           <a href={article.url} target="_blank"
            rel="noopener noreferrer">link of the article</a>
            <button>DELETE</button>
           </div>
           
        </div>
         )
        })}
      </div>
    )
  }
}

export default Dashboard


