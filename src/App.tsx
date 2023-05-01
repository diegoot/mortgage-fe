import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Calculator from "./features/calculator/components";
import AppBar from "./features/common/components/AppBar";
import AppContext from "./features/common/components/AppContext";
import { Provider } from "react-redux";
import { store } from "./store";

const themeLight = createTheme({
  palette: {
    mode: "light",
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ isDarkTheme, setTheme: setIsDarkTheme }}>
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
          <CssBaseline />
          <AppBar />
          <Calculator />
        </ThemeProvider>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
