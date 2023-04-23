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
        <Stack space="large">
          <AtomsBox
            boxShadow={{ focusVisible: "focus-ring" }}
            padding={"wide"}
            as="button"
          >
            Focus me
          </AtomsBox>
          <AtomsBox
            boxShadow={{ hasFocusVisible: "focus-ring" }}
            borderRadius="action-base"
          >
            <AtomsBox
              color="text-base"
              as="a"
              href="https://google.com"
              outlineWidth="none"
            >
              Link
            </AtomsBox>
          </AtomsBox>
        </Stack>
      </AtomsBox>
    </ThemeProvider>
  );
};
