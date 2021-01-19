// import React from "react";
// import apiHandler from "../api/apiHandler";

// const Dashboard = ({ title, description, url, author, image }) => {
//   return (
//     <div>
//       <h1>My dashboard</h1>
//       <h2>{title}</h2>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'

class Dashboard extends React.Component {
  
state = {
  articles : '',
}

componentDidMount(event){
  console.log(event)
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Dashboard