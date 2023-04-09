import * as React from "react";
import { Box } from "../lib/Box";
import { Box as AtomsBox } from "../lib/AtomsBox";
import { ThemeProvider } from "../lib/ThemeProvider";
export const App = () => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  return (
    <ThemeProvider>
      {/* <Box
        pl="$xsmall"
        borderRadius={"$action-base"}
        color={"$text-base"}
        backgroundColor={"$on-background-base"}
      >
        Hello
      </Box>
      <Box
        backgroundColor={"$background-base"}
        padding={{ small: "23px" }}
        color={"$text-base"}
      >
        <div>padding</div>
      </Box> */}
      <AtomsBox
        as="a"
        ref={ref}
        display="flex"
        flexDirection={{ small: "column", medium: "row" }}
        backgroundColor="background-base"
        href="https://google.com"
      >
        Hey
      </AtomsBox>
    </ThemeProvider>
  );
};
