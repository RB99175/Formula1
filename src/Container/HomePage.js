import React, { Component } from "react";
import "../App.css";
import YearDropDown from "../Component/YearDropDown";
import Button from "../Component/Button";
import image from "../ferrari.png";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.updateSeason = this.updateSeason.bind(this);
    this.state = {
      seasons: [],
      selectedSeason: "1950"
    };
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/seasons.json?limit=71")
      .then(response => response.json())
      .then(data => {
        this.setState({ seasons: data.MRData.SeasonTable.Seasons });
      });
  }

  handleClick() {
    this.props.history.push(`/Results/${this.state.selectedSeason}`);
  }

  updateSeason(season) {
    this.setState({
      selectedSeason: season
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Formula 1 Race Winners
            <img src={image} className="App-logo" alt="logo" />
          </h1>
        </header>
        <div className="body">
          <p className="h2">
            Formula One (also known as Formula 1 or F1) is the highest class of
            single-seater auto racing sanctioned by the Fédération
            Internationale de l'Automobile (FIA) and owned by the Formula One
            Group. The FIA Formula One World Championship has been one of the
            premier forms of racing around the world since its inaugural season
            in 1950. The word "formula" in the name refers to the set of rules
            to which all participants' cars must conform.[1]A Formula One season
            consists of a series of races, known as Grands Prix (French for
            'grand prizes' or 'great prizes'), which take place worldwide on
            purpose-built circuits and on public roads. The results of each race
            are evaluated using a points system to determine two annual World
            Championships: one for drivers, the other for constructors. Drivers
            must hold valid Super Licences, the highest class of racing licence
            issued by the FIA.[2] The races must run on tracks graded "1"
            (formerly "A"), the highest grade-rating issued by the FIA.[2] Most
            events occur in rural locations on purpose-built tracks, but several
            events take place on city streets.
            <br></br>
            <b>View year wise Formula 1 race details</b>
          </p>
          <div className="dropdown-menu-center">
            <div>
              <YearDropDown
                seasons={this.state.seasons}
                handleUpdate={this.updateSeason}
              />
            </div>
          </div>
          <Button
            name="Click here"
            onclick={() => {
              this.handleClick();
            }}
          />
          <img src={image} className="raceCar1" alt="logo" />
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
