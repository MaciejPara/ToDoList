import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: [{ id: 1, rNumb: 5 }]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    console.log(e + "deleted");
    const stickyTab = this.state.sticky.filter(c => c.id !== e);
    const sticky = stickyTab;
    this.setState({ sticky });
  }
  handleClick() {
    const stickyTab = [...this.state.sticky];
    let nr = stickyTab.length;
    let rNr = Math.random() * (6 - 0) + 0;
    rNr = parseInt(rNr, 10);
    nr++;
    console.log(rNr);
    stickyTab.push({ id: nr, rNumb: rNr });
    let sticky = stickyTab;
    this.setState({ sticky });
  } // handleClick get info about clicked button and update state with stickys
  render() {
    return (
      <div className="aplication">
        <Header click={this.handleClick} />
        <Main delete={this.handleDelete} stickys={this.state.sticky} />
      </div>
    );
  }
}

export default App;