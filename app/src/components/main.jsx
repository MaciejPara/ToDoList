import React, { Component } from "react";
import "./css/main.css";
import Stickys from "./stickys";
class Main extends Component {
  render() {
    return (
      <div className="main">
        <Stickys
          changeColor={this.props.changeColor}
          delete={this.props.delete}
          stickys={this.props.stickys}
          title={this.props.title}
          content={this.props.content}
        />
      </div>
    );
  }
}

export default Main;
