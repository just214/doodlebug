import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "app/Home";

test("home", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(main.getByRole("heading", { level: 1, name: /hello/i })).toBeDefined();
});
