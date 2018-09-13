import React, { Component } from "react";
class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleClick() {
    console.log("clicked");
    this.props.click();
  }
  handleSearch(e) {
    console.log(e.target.value);
    this.props.handleSearch(e.target.value);
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
        <div
          className="collapse navbar-collapse text-center flex-row-reverse"
          id="navbarNav"
        >
          <br />
          <form className="form-inline my-2 my-lg-0 m-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleSearch}
              style={{ width: "100%" }}
            />
          </form>
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a
                className=" nav-link btn btn-outline-secondary "
                onClick={this.handleClick}
              >
                + Add new sticky <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
