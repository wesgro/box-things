import * as React from "react";
import clsx from "clsx";
import { brightClass, darkClass } from "./theme/constants";
import {spaceDense, spaceLoose} from "./theme/vars.css"
import { useMediaQuery } from "@react-hookz/web";
import { Box } from "./AtomsBox";

// Type for the theme context if it included two more string values, density and mode
export type ThemeContextProps = {
  className: string;
};
export const ThemeContext = React.createContext<ThemeContextProps|undefined>(undefined);
// theme ThemeProvider's type
export type ThemeProviderProps = {
  children: React.ReactNode;
  density?: "dense" | "loose";
}
export const ThemeProvider = ({ children, density = 'loose' }: ThemeProviderProps) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDark ? "dark" : "bright";

  return (
    <ThemeContext.Provider value={{className: clsx({
      [brightClass()]: mode === "bright",
      [darkClass()]: mode === "dark",
        [spaceDense]: density === "dense",
        [spaceLoose]: density === "loose",
      }) }}>
        {children}
    </ThemeContext.Provider>
  );
};
