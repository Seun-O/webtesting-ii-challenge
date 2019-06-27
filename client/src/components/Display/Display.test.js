import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Display from "./Display";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if the component renders.
it("renders without crashing ", () => {
  render(<Display />);
});

// Test the document to see if balls appears on the page
// Test Type getByText implicit deny Testing: regex /balls/i  -i case indifference
it("should display balls", () => {
  const { getByText } = render(<Display />);
  const balls = getByText(/balls/i);
  // No Assertion required because of implicit deny
  expect(balls).toBeInTheDocument();
});

// Test the document to see if strikes appears on the page
// Test Type getByText implicit deny Testing: regex /strikes/i  -i case indifference
it("should display strikes", () => {
  const { getByText } = render(<Display />);
  const strikes = getByText(/strikes/i);
  // No Assertion required because of implicit deny
  expect(strikes).toBeInTheDocument();
});

// test the document to see if a range of numbers renders on the page
// Test Type getAllByText implicit deny Testing: regex /[0 - 3]/
it("should display a list of numbers", () => {
  const { getAllByText } = render(<Display ball={0} strike={2} foul={3} />);
  const numbers = getAllByText(/[0-3]/);
  // No Assertion required because of implicit deny
});
