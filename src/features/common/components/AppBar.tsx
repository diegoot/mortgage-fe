import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeSwitch from "./DarkModeSwitch";
import { useContext } from "react";
import AppContext from "./AppContext";

const AppBar = () => {
  const { setTheme } = useContext(AppContext);
  const handleChangeTheme = (isDarkTheme: boolean) => {
    setTheme(isDarkTheme);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mortgage
        </Typography>
        <DarkModeSwitch onChange={handleChangeTheme} />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
