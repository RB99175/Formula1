import React, { Component } from "react";
import "../App.css";
import formula1 from "../ferrari.png";
import image from "../ferrari.png";
import { withRouter } from "react-router-dom";
import QueryDetails from "../Component/QueryDetails";
import RaceTable from "../Component/RaceTable";
import Button from "../Component/Button";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      seasons: "",
      results: ""
    };
  }

  componentDidMount() {
    const year = this.props.match.params.id;
    fetch(`http://ergast.com/api/f1/${year}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          races: data.MRData.RaceTable.Races,
          season: data.MRData.RaceTable.season,
          results: data.MRData.total
        });
      });
  }

  handleClick() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={formula1} className="App-logo" alt="logo" />{" "}
        </header>
        <div className="body">
          <QueryDetails
            seasons={this.state.season}
            results={this.state.results}
          />
          <Button 
            name="Click Here for Home Page"
            onclick={() => {
              this.handleClick();
            }}
          />{" "}
        </div>
        <RaceTable races={this.state.races} />{" "}
      </div>
    );
  }
}

export default withRouter(Results);
