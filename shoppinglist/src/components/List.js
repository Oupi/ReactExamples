import React from "react";

class List extends React.Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }

  click(event){
    this.props.callback("Hello from button");
  }

  render(){
    return(
      <ul style={{listStyleType:"none"}}>
        <li>Rum</li>
        <li>Whiskey</li>
        <li><button onClick={this.click}>BeerButton</button></li>
      </ul>
    );
  }
}

export default List;
