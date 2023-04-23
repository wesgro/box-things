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
        height="100%"
        backgroundColor={"background-base"}
        color={"text-base"}
        padding="wide"
      >
        <Stack space={{ small: "15px", medium: "45px", large: "90px" }}>
          <AtomsBox
            boxShadow={{ hasFocusVisible: "focus-ring" }}
            borderRadius="action-base"
          >
            <AtomsBox color="text-base" as="a" href="#0" outlineWidth="none">
              Link 1
            </AtomsBox>
          </AtomsBox>
          <AtomsBox
            boxShadow={{ hasFocusVisible: "focus-ring" }}
            borderRadius="action-base"
          >
            <AtomsBox color="text-base" as="a" href="#0" outlineWidth="none">
              Link 2
            </AtomsBox>
          </AtomsBox>
          <Stack space={{ small: "90px", medium: "20px", large: "0px" }}>
            <AtomsBox
              boxShadow={{ hasFocusVisible: "focus-ring" }}
              borderRadius="action-base"
            >
              <Stack space="fat">
                <AtomsBox color="text-base" outlineWidth="none">
                  Link 1
                </AtomsBox>
                <AtomsBox color="text-base" outlineWidth="none">
                  Link 1
                </AtomsBox>
                <AtomsBox color="text-base" outlineWidth="none">
                  Link 1
                </AtomsBox>
              </Stack>
            </AtomsBox>
            <AtomsBox
              boxShadow={{ hasFocusVisible: "focus-ring" }}
              borderRadius="action-base"
            >
              <AtomsBox color="text-base" as="a" href="#0" outlineWidth="none">
                Link 2
              </AtomsBox>
            </AtomsBox>
          </Stack>
        </Stack>
      </AtomsBox>
    </ThemeProvider>
  );
};
