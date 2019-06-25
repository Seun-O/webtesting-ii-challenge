import React from "react";
/**
 * Props are updated from the Dashboard Component when each respective button is clicked
 * count rules are located in the dashboard file.
 */
function Display(props) {
  return (
    <div>
      <h2>Balls: {props.ball}</h2>
      <h2>Strikes: {props.strike}</h2>
      <h2>Fouls: {props.foul}</h2>
    </div>
  );
}

export default Display;
