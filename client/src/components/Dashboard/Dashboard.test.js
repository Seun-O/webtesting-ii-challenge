import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Button from "./Button";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if the component renders.
it("renders without crashing ", () => {
  render(<Dashboard />);
});

/**
 * Test for a button with text strike
 * Test type implicit deny testing /strike/i case insensitive
 *  */
it("should have a button strike", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} name="strike" />);

  //Fires an onClick event based on the button that has text strike
  fireEvent.click(getByText(/strike/i));

  //Assertion that checks if the button has been called and how many times it has been called
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledTimes(1);
});

/**
 * Test for a button with text ball
 * Test type implicit deny testing /ball/i case insensitive
 *  */
it("should have a button ball", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} name="ball" />);

  //Fires an onClick event based on the button that has text ball
  fireEvent.click(getByText(/ball/i));

  //Assertion that checks if the button has been called and how many times it has been called
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledTimes(1);
});

/**
 * Test for a button with text foul
 * Test type implicit deny testing /foul/i case insensitive
 *  */
it("should have a button foul", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} name="foul" />);

  //Fires an onClick event based on the button that has text foul
  fireEvent.click(getByText(/foul/i));

  //Assertion that checks if the button has been called and how many times it has been called
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledTimes(1);
});

/**
 * Test for a button with text hit
 * Test type implicit deny testing /hit/i case insensitive
 *  */
it("should have a button hit", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} name="hit" />);

  //Fires an onClick event based on the button that has text hit
  fireEvent.click(getByText(/hit/i));

  //Assertion that checks if the button has been called and how many times it has been called
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledTimes(1);
});
