import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import About from "./About";

class Main extends React.Component{
  constructor(props){
    super(props);
    this.callback = this.callback.bind(this);
    this.state = {message:""};
  }

  callback(value){
    this.setState({message:value});

  }

  render(){
    return(
      <main>
        <p>{this.state.message}</p>
        <Switch>
          <Route exact path = "/" render = {()=>(<Home name = "Mario"/>)}/>
          <Route path = "/list" render = {()=>(<List callback = {this.callback}/>)}/>
          <Route path = "/about" component = {About}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
