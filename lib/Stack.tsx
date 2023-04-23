import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ConditionalValue,
  RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import { container, stackSpace } from "./Stack.css";
import { Box } from "./AtomsBox";
import {
  type ResponsiveSpace,
  normalizeResponsiveValue,
  mapResponsiveValue,
} from "./AtomsBox.css";
import * as React from "react";
import { space as spaceVar, shape, color } from "./theme/vars.css";

export interface StackProps {
  children: React.ReactNode;
  space: "large" | "small" | number;
}
export const Stack: React.FC<StackProps> = ({ children, space }) => {
  console.log(stackSpace, spaceVar, space);
  //   console.log(normalizeResponsiveValue("medium"));

  return (
    <Box
      className={container}
      style={assignInlineVars({ [stackSpace]: "30px" })}
    >
      {children}
    </Box>
  );
};
