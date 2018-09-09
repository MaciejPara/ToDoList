import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 0,
      counter: 0,
      stickyCount: 0,
      nr: 0,
      colors: [
        { id: 0, value: "primary" },
        { id: 1, value: "secondary" },
        { id: 2, value: "warning" },
        { id: 3, value: "success" },
        { id: 4, value: "danger" },
        { id: 5, value: "info" },
        { id: 6, value: "dark" }
      ],
      sticky: [
        {
          id: 0,
          rNumb: 5,
          curColor: [
            { id: 0, value: "primary" },
            { id: 1, value: "secondary" },
            { id: 2, value: "warning" },
            { id: 3, value: "success" },
            { id: 4, value: "danger" },
            { id: 6, value: "dark" }
          ]
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }
  handleDelete(e) {
    const stickyTab = this.state.sticky.filter(c => c.id !== e);
    const sticky = stickyTab;

    const counter = this.state.counter + 1;
    this.setState({ counter });

    this.setState({ sticky });
  }
  handleClick() {
    let stickyCount = this.state.stickyCount + 1;
    this.setState({ stickyCount });
    const stickyTab = [...this.state.sticky];

    let rNr = Math.random() * (6 - 0) + 0;
    rNr = parseInt(rNr, 10);

    console.log(stickyCount);
    const colors = this.state.colors.filter(c => c.id !== rNr);
    stickyTab.push({ id: stickyCount, rNumb: rNr, curColor: colors });
    let sticky = stickyTab;
    this.setState({ nr: this.state.nr + 1 });
    this.setState({ sticky });
  } // handleClick get info about clicked button and update state with stickys
  updateColor(id, color) {
    let stickyTab = [...this.state.sticky];

    const index = stickyTab.findIndex(i => i.id === id);
    const curColor = this.state.colors.filter(c => c.id !== color);

    stickyTab[index].rNumb = color;
    stickyTab[index].curColor = curColor;

    const sticky = stickyTab;
    this.setState({ sticky });
  }
  render() {
    return (
      <div className="aplication">
        <Header click={this.handleClick} />
        <Main
          changeColor={this.updateColor}
          delete={this.handleDelete}
          stickys={this.state.sticky}
        />
      </div>
    );
  }
}

export default App;
