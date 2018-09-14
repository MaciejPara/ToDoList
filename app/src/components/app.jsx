import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setContent = this.setContent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("sticky") && localStorage.getItem("stickyCount")) {
      if (JSON.parse(localStorage.getItem("sticky"))[0] === undefined) {
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
        localStorage.setItem(
          "sticky",
          JSON.stringify({
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
          })
        );
        this.setState({ stickyCount: 0 });
        localStorage.setItem("stickyCount", JSON.stringify({ stickyCount: 0 }));
      } else {
        let count = localStorage.getItem("stickyCount");
        let object = localStorage.getItem("sticky");
        //console.log(JSON.parse(object));
        this.setState({ sticky: JSON.parse(object) });
        this.setState({ stickyCount: JSON.parse(count) });
      }
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
    // var retrievedObject = localStorage.getItem("sticky");
  }
  handleClick() {
    let stickyCount = this.state.stickyCount + 1;
    this.setState({ stickyCount });
    localStorage.setItem("stickyCount", JSON.stringify(stickyCount));
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
    //console.log(id);
    const index = stickyTab.findIndex(i => i.id === id);
    const curColor = this.state.colors.filter(c => c.id !== color);

    stickyTab[index].rNumb = color;
    stickyTab[index].curColor = curColor;

    const sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  setTitle(id, title) {
    //console.log(id);
    const stickyTab = [...this.state.sticky];
    const index = stickyTab.findIndex(i => i.id === id);
    //console.log(index);
    stickyTab[index].title = title;
    let sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  setContent(id, content) {
    //console.log(id, content);

    const stickyTab = [...this.state.sticky];
    const index = stickyTab.findIndex(i => i.id === id);
    //console.log(index);
    stickyTab[index].content = content;
    let sticky = stickyTab;
    this.setState({ sticky });
    localStorage.setItem("sticky", JSON.stringify(sticky));
  }
  handleSearch(e) {
    this.setState({ search: e });
  }
  render() {
    return (
      <div className="aplication">
        <Header click={this.handleClick} handleSearch={this.handleSearch} />
        <Main
          changeColor={this.updateColor}
          delete={this.handleDelete}
          stickys={this.state.sticky}
          title={this.setTitle}
          content={this.setContent}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
