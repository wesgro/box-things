import { space } from "./theme/vars.css";
import {
  createVar,
  style,
  globalStyle,
  assignVars,
  fallbackVar,
} from "@vanilla-extract/css";

export const stackSpace = createVar();
export const stackSpaceMedium = createVar();
export const stackSpaceLarge = createVar();

export const container = style({
  vars: {
    [stackSpace]: "",
  },
  "@media": {
    "screen and (min-width: 768px)": {
      vars: {
        [stackSpaceMedium]: fallbackVar(stackSpaceMedium, stackSpace),
      },
    },
    "screen and (min-width: 1024px)": {
      vars: {
        [stackSpaceLarge]: fallbackVar(stackSpaceLarge, stackSpaceMedium),
      },
    },
  },
});

export const stack = globalStyle(`${container} > * + *`, {
  marginTop: stackSpace,
  "@media": {
    "screen and (min-width: 768px)": {
      marginTop: fallbackVar(stackSpaceMedium, stackSpace),
    },
    "screen and (min-width: 1024px)": {
      marginTop: fallbackVar(stackSpaceLarge, stackSpaceMedium),
    },
  },
});
