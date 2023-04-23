import { space, shape, color } from "./theme/vars.css";
import { createVar, style, globalStyle } from "@vanilla-extract/css";

export const stackSpace = createVar();

export const container = style({
  vars: {
    [stackSpace]: space["none"],
  },
});

export const stack = globalStyle(`${container} > * + *`, {
  marginTop: stackSpace,
});
