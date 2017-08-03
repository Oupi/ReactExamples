import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import About from "./About";
import Add from "./Add";


class Main extends React.Component{
  constructor(props){
    super(props);
    this.callback = this.callback.bind(this);
    this.state = {itemList:[], id:100};
  }

  callback(value){
    let newList = this.state.itemList.slice();
    value.id = this.state.id;
    value.id++;
    newList.push(value);
    this.setState({itemList:newList, id:value.id});
  }

  render(){
    return(
      <main>
        <p>{this.state.message}</p>
        <Switch>
          <Route exact path = "/" render = {()=>(<Home name = "Mario"/>)}/>
          <Route path = "/list" render = {()=>(<List/>)}/>
          <Route path = "/add" render = {()=>(<Add callback = {this.callback}/>)}/>
          <Route path = "/about" component = {About}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
