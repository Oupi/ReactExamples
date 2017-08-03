import React from "react";

class SecondButton extends React.Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }

  click(event){
    this.props.callback("Hi! I'm second button");
  }

  render(){
    return(<button onClick={this.click}>Awesome</button>);
  }
}

export default SecondButton;
