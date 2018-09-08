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
    this.updateColor = this.updateColor.bind(this);
  }
  delete(e) {
    this.props.delete(e);
  }
  updateColor(id, color) {
    console.log(id + " " + color + "--color");
    this.props.changeColor(id, color);
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
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a
                    className="dropdown-item"
                    onClick={() => this.delete(stickys.id)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row card-text text-white">
                <textarea
                  className="col"
                  placeholder="Write your note"
                  cols="30"
                  rows="5"
                  maxLength="80"
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
                <div className="col-3 btn-group-vertical">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.updateColor(stickys.id, 0)}
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => this.updateColor(stickys.id, 1)}
                  />
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.updateColor(stickys.id, 2)}
                  />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.updateColor(stickys.id, 3)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.updateColor(stickys.id, 4)}
                  />
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.updateColor(stickys.id, 5)}
                  />
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => this.updateColor(stickys.id, 6)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Stickys;
