import React, { Component } from "react";
import "./css/sticky.css";
class Stickys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      defColor: [
        { id: 0, value: "primary" },
        { id: 1, value: "secondary" },
        { id: 2, value: "warning" },
        { id: 3, value: "success" },
        { id: 4, value: "danger" },
        { id: 5, value: "info" },
        { id: 6, value: "dark" }
      ]
    };
    this.delete = this.delete.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }
  delete(e) {
    this.props.delete(e);
  }
  updateColor(id, colNr) {
    //console.log(this.target.id);
    //console.log(id + " " + colNr + "--color");
    this.props.changeColor(id, colNr);
  }
  handleTitle(title) {
    //console.log(title.target.id);
    this.setState({ title: title.target.value });
    //console.log(event.target.value);
    let val = title.target.id;
    val = parseInt(val, 10);
    this.props.title(val, title.target.value);
  }
  handleContent(content) {
    //console.log(content.target.name);

    this.setState({ content: content.target.value });
    //console.log(event.target.value);
    //console.log(this.props.stickys);
    let val = content.target.name;
    val = parseInt(val, 10);
    this.props.content(val, content.target.value);
  }
  render() {
    let filteredStickys = this.props.stickys.filter(sticky => {
      return (
        sticky.title.indexOf(this.props.search) !== -1 ||
        sticky.content.indexOf(this.props.search) !== -1
      );
    });

    return (
      <div>
        {filteredStickys &&
          filteredStickys.map(stickys => (
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
                  id={stickys.id}
                  placeholder="Card title"
                  maxLength="30"
                  style={{
                    backgroundColor: "inherit",
                    border: "none",
                    color: "white",
                    outline: "none",
                    resize: "none"
                  }}
                  value={stickys.title}
                  onChange={this.handleTitle}
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                  >
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
                    name={stickys.id}
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
                    value={stickys.content}
                    onChange={this.handleContent}
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
