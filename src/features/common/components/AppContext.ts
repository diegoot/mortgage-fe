import { createContext } from "react";

interface IAppContext {
  isDarkTheme: boolean;
  setTheme: (isDarkTheme: boolean) => void;
}

const defaultAppContext: IAppContext = {
  isDarkTheme: false,
  setTheme: () => {},
};

const AppContext = createContext<IAppContext>(defaultAppContext);

export default AppContext;
