import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";
import "./switchButton.css";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);

  const btnHandler = () => {
    theme.setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme.themeMode);
  }, [theme]);
  return (
    <>
      <h1>Note: This form is just for the demo its not working yet...</h1>
      <div className="ml-6 mt-5">
        <h1 className="text-white  dark:text-white">Switch Theme </h1>
        <label className="switch">
          <input type="checkbox" onChange={btnHandler} />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default SwitchButton;
