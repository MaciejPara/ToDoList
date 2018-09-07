import React, { Component } from "react";
class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("clicked");
    this.props.click();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white ">
        <a className="navbar-brand font-weight-bold">ToDo list</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <br />
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a
                className=" nav-link btn btn-outline-secondary"
                onClick={this.handleClick}
              >
                + Add new sticky <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/MaciejPara?tab=repositories"
              >
                My github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
