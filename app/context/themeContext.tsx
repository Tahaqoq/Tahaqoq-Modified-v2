"use client";

import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `false`);
      document!.querySelector("html")!.setAttribute("data-theme", "light");
      setIsDarkTheme(false);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme
        ? document!.querySelector("html")!.setAttribute("data-theme", "dark")
        : document!.querySelector("html")!.setAttribute("data-theme", "light");

      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    // document!.querySelector("body")!.classList.toggle("dark");
    const att = document!.querySelector("html")!.getAttribute("data-theme");
    switch (att) {
      case null:
        document!.querySelector("html")!.setAttribute("data-theme", "light");
        break;
      case "light":
        document!.querySelector("html")!.setAttribute("data-theme", "dark");
        break;
      default:
        document!.querySelector("html")!.setAttribute("data-theme", "light");
        break;
    }
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
