import React, { Component } from "react";
import "./css/sticky.css";
class Stickys extends Component {
  constructor(props) {
    super(props);
    this.color = "primary";
    this.state = {
      defColor: [
        { id: 0, value: "primary" },
        { id: 1, value: "secondary" },
        { id: 2, value: "warning" },
        { id: 3, value: "success" },
        { id: 4, value: "danger" },
        { id: 5, value: "info" },
        { id: 6, value: "dark" }
      ],
      curColor: [
        { id: 0, value: "primary" },
        { id: 1, value: "secondary" },
        { id: 2, value: "warning" },
        { id: 3, value: "success" },
        { id: 4, value: "danger" },
        { id: 6, value: "dark" }
      ]
    };
    this.delete = this.delete.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }
  delete(e) {
    this.props.delete(e);
  }
  updateColor(id, colNr) {
    console.log(id + " " + colNr + "--color");
    this.props.changeColor(id, colNr);
    // let curColor = this.state.defColor.filter(c => c.id !== colNr);
    // this.setState({ curColor });
    // const defColor = this.props.stickys[colNr].curColor;
    // this.setState({ defColor });
  }
  render() {
    return (
      <div>
        {this.props.stickys.map(stickys => (
          <div
            key={stickys.id}
            className={
              "sticky card text-white bg-" +
              this.state.defColor[stickys.rNumb].value +
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
                  {stickys.curColor.map(color => (
                    <button
                      key={color.id}
                      type="button"
                      className={"btn btn-" + color.value}
                      onClick={() => this.updateColor(stickys.id, color.id)}
                    />
                  ))}
                  {/* <button
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
                  /> */}
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
