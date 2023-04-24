import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  container,
  stackSpace,
  stackSpaceLarge,
  stackSpaceMedium,
} from "./Stack.css";
import { Box } from "./AtomsBox";
import { breakpoints } from "./AtomsBox.css";
import type { RequiredResponsiveValue } from "./AtomsBox.css";
import * as React from "react";
import { space } from "./theme/vars.css";

export type StackSpace = "fat" | "thin";
export interface StackProps {
  children: React.ReactNode;
  space: RequiredResponsiveValue<StackSpace | (string & {})>;
}

const spaceMap: Record<StackSpace, string> = {
  fat: space.wide,
  thin: space.narrow,
};

function isStackSpace(value: string): value is StackSpace {
  return value in spaceMap;
}
type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type StringTupleFromArrayValues<T extends string[]> = {
  [P in keyof T]: T[P] extends string ? string : never;
};
type Breakpoints = typeof breakpoints;
type ResolveValueReturnType = StringTupleFromArrayValues<
  Writeable<Breakpoints>
>;
const resolveValue = (space: StackProps["space"]): ResolveValueReturnType => {
  if (typeof space === "string") {
    return isStackSpace(space)
      ? [spaceMap[space], spaceMap[space], spaceMap[space]]
      : [space, space, space];
  }
  const [small, medium, large] = breakpoints.map((key) => {
    let responsiveValue = space[key];
    if (!responsiveValue) return "";
    if (isStackSpace(responsiveValue)) {
      return spaceMap[responsiveValue];
    }
    return responsiveValue;
  });
  return [small, medium, large];
};
export const Stack: React.FC<StackProps> = ({ children, space }) => {
  const [small, medium, large] = resolveValue(space);

  return (
    <Box
      className={container}
      style={assignInlineVars({
        [stackSpace]: small,
        [stackSpaceMedium]: medium,
        [stackSpaceLarge]: large,
      })}
    >
      {children}
    </Box>
  );
};
