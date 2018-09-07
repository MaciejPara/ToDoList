import React, { Component } from "react";
import "./css/sticky.css";
class Stickys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        { value: "primary" },
        { value: "secondary" },
        { value: "warning" },
        { value: "success" },
        { value: "danger" },
        { value: "info" },
        { value: "dark" }
      ]
    };
    this.delete = this.delete.bind(this);
  }
  delete(e) {
    this.props.delete(e);
  }
  render() {
    return (
      <div>
        {this.props.stickys.map(stickys => (
          <div
            key={stickys.id}
            className={
              "sticky card text-white bg-" +
              this.state.color[stickys.rNumb].value +
              " mb-3"
            }
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <textarea
                placeholder="Card title"
                maxLength="30"
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  color: "white",
                  outline: "none",
                  resize: "none"
                }}
              />
              <button
                onClick={() => this.delete(stickys.id)}
                type="button"
                className="delete btn btn-danger"
              >
                Delete
              </button>
            </div>
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
                    backgroundColor: "inherit",
                    border: "none",
                    color: "white",
                    outline: "none",
                    resize: "none"
                  }}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Stickys;
