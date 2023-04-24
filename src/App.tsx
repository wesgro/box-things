import * as React from "react";
// import { Box } from "../lib/Box";
import { Box as AtomsBox } from "../lib/AtomsBox";
import { Stack } from "../lib/Stack";
import { ThemeProvider } from "../lib/ThemeProvider";
export const App = () => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  return (
    <ThemeProvider>
      <AtomsBox
        as="main"
        ref={ref}
        sx={{
          height: "100%",
          backgroundColor: "background-base",
          color: "text-base",
          padding: "wide",
        }}
      >
        <Stack space={{ small: "15px", medium: "45px", large: "90px" }}>
          <AtomsBox
            sx={{
              boxShadow: { hasFocusVisible: "focus-ring" },
              borderRadius: "action-base",
            }}
          >
            <AtomsBox
              as="a"
              href="#0"
              sx={{
                outline: "focus-ring",
                color: "text-base",
              }}
            >
              Link 1
            </AtomsBox>
          </AtomsBox>
          <AtomsBox
            sx={{
              boxShadow: { hasFocusVisible: "focus-ring" },
              borderRadius: "action-base",
            }}
          >
            <AtomsBox
              __backfaceVisibility="visible"
              sx={{
                outlineWidth: "none",
                color: "text-base",
              }}
              as="a"
              href="#0"
            >
              Link poop
            </AtomsBox>
          </AtomsBox>
        </Stack>
      </AtomsBox>
    </ThemeProvider>
  );
};
