import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
