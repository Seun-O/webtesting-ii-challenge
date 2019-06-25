import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

// afterEach(cleanup);

it("renders without crashing ", () => {
  render(<Dashboard />);
});
