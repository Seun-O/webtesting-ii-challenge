import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Display from "./Display";

it("renders without crashing ", () => {
  render(<Display />);
  afterEach(cleanup);
});

it("should display count of balls", () => {
  const simulatedDom = render(<Display />);
  const balls = simulatedDom.getByText(/balls/i);
  const ballsCount = simulatedDom.getAllByText(
    /[0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1000/
  );
  expect(balls).toBeInTheDocument();
  expect(ballsCount).toBeInTheDocument();
  afterEach(cleanup);
});

it("should display count of strikes", () => {
  const simulatedDom = render(<Display />);
  const strikes = simulatedDom.queryByText(/strikes/i);
  const strikesCount = simulatedDom.queryAllByText(
    /[0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1000/
  );

  expect(strikes).toBeInTheDocument();
  expect(strikesCount).toBeInTheDocument();
  afterEach(cleanup);
});
