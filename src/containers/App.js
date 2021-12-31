import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js";
import Spinner from "../components/Spinner";
import HandleErrors from "../components/HandleErrors";
import "./App.css";

import Scroll from "../components/Scroll.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      searchField: "",
    };
  }

  onSearchChange = (ev) => {
    this.setState({ searchField: ev.target.value });
  };

  render() {
    //
    const { searchField, aliens } = this.state;

    const searchedAliens = aliens.filter((alien) => {
      return alien.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return !aliens.length ? (
      //
      <div className="tc">
        <h1 className="fw3 f1">Loading Signal</h1>
        <Spinner />
      </div>
    ) : (
      //
      <div className="tc">
        <h1 className="fw3 f1">Alien Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <HandleErrors>
            <CardList aliens={searchedAliens} />
          </HandleErrors>
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json().then((data) => this.setState({ aliens: data }))
      );
    } catch (err) {}
  }
}

export default App;
//
