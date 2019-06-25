import React from "react";
import Display from "../Display/Display";

class Dashboard extends React.Component {
  state = { strike: 0, ball: 0, foul: 0 };

  /**
   * Event Handler that has all the count rules in place
   * Uses a switch statement based on the name of the button that is clicked
   *
   * Count Rules
   * balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
   * balls and strikes reset to 0 when a `hit` is recorded.
   *  `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike.
   * With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
   *
   * */

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
        if (this.state.strike < 2) {
          this.setState({ strike: this.state.strike + 1 });
        }
        this.setState({ foul: this.state.foul + 1 });
        break;
      case "hit":
        this.setState({ strike: 0, ball: 0, foul: 0 });
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
