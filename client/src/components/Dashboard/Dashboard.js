import React from "react";
import Display from "../Display/Display";

class Dashboard extends React.Component {
  state = { strike: 0, ball: 0, foul: 0 };

  handleClicks = e => {
    switch (e.target.name) {
      case "strike":
        if (this.state.strike < 2) {
          this.setState({ strike: this.state.strike + 1 });
        } else {
          this.setState({ strike: 0 });
        }
        break;
      case "ball":
        if (this.state.ball < 3) {
          this.setState({ ball: this.state.ball + 1 });
        } else {
          this.setState({ ball: 0 });
        }
        break;
      case "foul":
        this.setState({ foul: this.state.foul + 1 });
        break;
      case "hit":
        this.setState({ strike: 0, ball: 0 });
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          foul={this.state.foul}
        />
        <div className="buttons">
          <button onClick={this.handleClicks} name="strike">
            Strike
          </button>
          <button onClick={this.handleClicks} name="ball">
            Ball
          </button>
          <button onClick={this.handleClicks} name="foul">
            Foul
          </button>
          <button onClick={this.handleClicks} name="hit">
            Hit
          </button>
        </div>
      </div>
    );
  }
}
export default Dashboard;
