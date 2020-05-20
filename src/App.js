import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CardList } from "./component/card-list/CardList";
import { SearchBoox } from "./component/searchBoox/SearchBoox";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchFilde: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleSearch = (e) => {
    this.setState({
      searchFilde: e.target.value,
    });
  };

  render() {
    const { monsters, searchFilde } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFilde.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>monsters rolodex</h1>
        <SearchBoox
          handleSearch={this.handleSearch}
          placeholder="search monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
