import React from "react";

const Decorator = (WrappedComponent) => {
  return class extends React.Component {
    render(){
      return(<WrappedComponent {...this.props}/>
      );
    }
  }
};

export default Decorator;
