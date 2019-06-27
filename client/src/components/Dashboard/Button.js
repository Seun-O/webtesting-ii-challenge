import React from "react";

export default props => {
  return (
    <button onClick={props.onClick} name={props.name}>
      {props.name}
    </button>
  );
};
