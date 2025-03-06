import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

// const getInitialDarkMode = () => {
//   const storedDarkMode = localStorage.getItem("darkTheme");
//   return storedDarkMode !== null
//     ? storedDarkMode === "true"
//     : window.matchMedia("(prefers-color-scheme: dark)").matches;
// };

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  // console.log(prefersDarkMode);
  // console.log(typeof(localStorage.getItem("darkTheme"))); it is string

  const storedDarkMode = localStorage.getItem("darkTheme");

  return storedDarkMode !== null ? storedDarkMode === "true" : prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("monkey");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
    // const body = document.querySelector("body");
    // body.classList.toggle("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
