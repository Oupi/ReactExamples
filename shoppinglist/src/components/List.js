import React from "react";

class List extends React.Component {
  render(){
    return(
      <ul style={{listStyleType:"none"}}>
        <li>Rum</li>
        <li>Whiskey</li>
        <li>Beer</li>
      </ul>
    );
  }
}

export default List;
