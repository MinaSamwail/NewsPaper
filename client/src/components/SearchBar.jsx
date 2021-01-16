import React from "react";
import axios from "axios";

// class SearchBar extends React.Component {
// state = {
//   search: "",
// };

// handleValue(event) {
//   console.log("I am filter", event);
//   this.setState({
//     search: event.target,
//   });
// }

// handleChange = (event) => {
//   const name = event.target.name;
// };

//   handleChange() {
//     axios
//       .get(
//         "https://api.currentsapi.services/v1/search?apiKey=vUAL2v06nYO7IMpRBTeP31MLtxRms900C_Q1CiUo-bWM1st9"
//       )
//       .then((responseFromApi) => {
//         console.log("response from api ->", responseFromApi.data.news);
//         this.setState({
//           search: responseFromApi.data.news,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             className="searchbar"
//             name="search"
//             onChange={() => this.handleChange}
//             type="search"
//             placeholder="Research..."
//           />
//           {/* <input className="search-btn" type="submit" value="Search" /> */}
//         </form>
//       </div>
//     );
//   }
// }

const SearchBar = (props) => {
  return (
    //error on onSubmit ?
    <form onSubmit={props.handleSearch}>
      <input
        className="searchbar"
        name="search"
        onChange={props.handleChange}
        type="search"
        // value=""
        placeholder="Research..."
      />
      {/* <button >GO</button> */}
    </form>
  );
};

export default SearchBar;
