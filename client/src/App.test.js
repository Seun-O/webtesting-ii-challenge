import React from "react";
// import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("renders without crashing ", () => {
  render(<App />);
});
