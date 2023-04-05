/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Profile from "./Profile";

afterEach(() => {
  cleanup();
});

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile userName={"goodjam"} name={"JAEMO"} />);
    expect(utils.container).toMatchSnapshot();
  });

  it("show the props correctly", () => {
    const { getByText } = render(
      <Profile userName={"goodjam"} name={"JAEMO"} />
    );
    expect(getByText("goodjam")).toBeTruthy();
    expect(getByText("(JAEMO)")).toBeTruthy();
    expect(getByText(/JA/)).toBeTruthy();
  });
});
