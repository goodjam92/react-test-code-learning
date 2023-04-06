import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import DelayedToggle from "./DelayedToggle";

afterEach(() => {
  cleanup();
});

describe("<DelayedToggle />", () => {
  it("토글이 켜지면 텍스트 표시", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByText("메오우!!")).toBeInTheDocument();
    });
  });

  it("토글 텍스트 ON/OFF", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    const text = await screen.findByText("ON");
    expect(text).toHaveTextContent("ON");
  });

  it("토글 OFF인 경우 텍스트가 사라진다", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    // 메오우 텍스트가 나오는 것을 기다렸다가 확인
    await waitFor(() => {
      expect(screen.getByText("메오우!!")).toBeInTheDocument();
    });
    fireEvent.click(toggleButton);
    // 메오우 텍스트가 사라지는 것을 기다렸다가 확인 함.
    await waitForElementToBeRemoved(() => screen.queryByText("메오우!!"));
  });
});
