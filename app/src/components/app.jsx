import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyCount: 0,
      colors: [
        { id: 0, value: "primary" },
        { id: 1, value: "secondary" },
        { id: 2, value: "warning" },
        { id: 3, value: "success" },
        { id: 4, value: "danger" },
        { id: 5, value: "info" },
        { id: 6, value: "dark" }
      ],
      sticky: []
      //   {
      //     id: 0,
      //     rNumb: 5,
      //     curColor: [
      //       { id: 0, value: "primary" },
      //       { id: 1, value: "secondary" },
      //       { id: 2, value: "warning" },
      //       { id: 3, value: "success" },
      //       { id: 4, value: "danger" },
      //       { id: 6, value: "dark" }
      //     ],
      //     title: "sss",
      //     content: "dddd"
      //   }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setContent = this.setContent.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("sticky")) {
      let object = localStorage.getItem("sticky");
      console.log(JSON.parse(object));
      this.setState({ sticky: JSON.parse(object) });
    } else {
      this.setState({
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
            ],
            title: "",
            content: ""
          }
        ]
      });
    }
  }
  handleDelete(e) {
    const stickyTab = this.state.sticky.filter(c => c.id !== e);
    const sticky = stickyTab;

    this.setState({ sticky });

    localStorage.setItem("sticky", JSON.stringify(sticky));

    // Retrieve the object from storage
    //var retrievedObject = localStorage.getItem("sticky");
  }
  handleClick() {
    let stickyCount = this.state.stickyCount + 1;
    this.setState({ stickyCount });
    const stickyTab = [...this.state.sticky];

    let rNr = Math.random() * (6 - 0) + 0;
    rNr = parseInt(rNr, 10);

    //console.log(stickyCount);
    const colors = this.state.colors.filter(c => c.id !== rNr);
    stickyTab.push({
      id: stickyCount,
      rNumb: rNr,
      curColor: colors,
      title: "",
      content: ""
    });
    let sticky = stickyTab;
    this.setState({ sticky });
    /////////////////

    // Put the object into storage
    localStorage.setItem("sticky", JSON.stringify(sticky));

    // Retrieve the object from storage
    //var retrievedObject = localStorage.getItem("sticky");

    //console.log("retrievedObject: ", JSON.parse(retrievedObject));

    //////////////////////////
  } // handleClick get info about clicked button and update state with stickys
  updateColor(id, color) {
    let stickyTab = [...this.state.sticky];
    console.log(id);
    const index = stickyTab.findIndex(i => i.id === id);
    const curColor = this.state.colors.filter(c => c.id !== color);

    stickyTab[index].rNumb = color;
    stickyTab[index].curColor = curColor;

    const sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  setTitle(id, title) {
    console.log(id);
    const stickyTab = [...this.state.sticky];
    const index = stickyTab.findIndex(i => i.id === id);
    console.log(index);
    stickyTab[index].title = title;
    let sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  setContent(id, content) {
    console.log(id, content);

    const stickyTab = [...this.state.sticky];
    const index = stickyTab.findIndex(i => i.id === id);
    console.log(index);
    stickyTab[index].content = content;
    let sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  render() {
    return (
      <div className="aplication">
        <Header click={this.handleClick} />
        <Main
          changeColor={this.updateColor}
          delete={this.handleDelete}
          stickys={this.state.sticky}
          title={this.setTitle}
          content={this.setContent}
        />
      </div>
    );
  }
}

export default App;
