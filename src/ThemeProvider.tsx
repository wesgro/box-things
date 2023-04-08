import * as React from "react";
import { brightClass, darkClass } from "./theme/constants";
import { useMediaQuery } from "@react-hookz/web";
import { Box } from "./AtomsBox";

const ThemeContext = React.createContext<"bright" | "dark">("bright");

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDark ? "dark" : "bright";
  const className = mode === "bright" ? brightClass() : darkClass();

  return (
    <ThemeContext.Provider value={mode}>
      <Box __display="contents" className={className}>
        {children}
      </Box>
    </ThemeContext.Provider>
  );
};
