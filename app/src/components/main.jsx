import React, { Component } from "react";
import "./css/main.css";
import Stickys from "./stickys";
class Main extends Component {
  constructor() {
    super();
    this.updateMain = this.updateMain.bind(this);
  }
  updateMain() {
    return (
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Card title</div>
        <div className="card-body">
          <p className="card-text text-white">
            <textarea
              placeholder="Write your note"
              cols="30"
              rows="5"
              maxLength="100"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "red",
                border: "none",
                color: "white",
                outline: "none",
                resize: "none"
              }}
            />
          </p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="main">
        {this.updateMain() && (
          <Stickys
            changeColor={this.props.changeColor}
            delete={this.props.delete}
            stickys={this.props.stickys}
          />
        )}
      </div>
    );
  }
}

export default Main;
