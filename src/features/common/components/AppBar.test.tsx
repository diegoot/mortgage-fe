import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import AppBar from "./AppBar";
import AppContext from "./AppContext";
import { useState } from "react";

describe("AppBar tests", () => {
  it("should set proper theme", async () => {
    const TestComponent = () => {
      const [isDarkTheme, setTheme] = useState(false);
      return (
        <AppContext.Provider value={{ isDarkTheme, setTheme }}>
          <Provider store={store}>
            <AppBar />
            {isDarkTheme ? "dark" : "light"}
          </Provider>
        </AppContext.Provider>
      );
    };
    render(<TestComponent />);
    const lightText = await screen.findByText(/light/i);
    expect(lightText).toBeInTheDocument();
    const switchElement = screen.getByRole("checkbox"); // Check this out: https://github.com/mui/material-ui/issues/17697
    fireEvent.click(switchElement, { target: { checked: "" } });
    const darkText = await screen.findByText("dark");
    expect(darkText).toBeInTheDocument();
  });
});
