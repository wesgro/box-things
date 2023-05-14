import {
  createGlobalTheme,
  createGlobalThemeContract,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";
import { brightClass, darkClass } from "./constants";
import { modularScale } from "polished";

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const prefixVar = (prefix: string) => (name: string | null) =>
  `box-thing-${prefix}-${name}`;

export const space = createThemeContract(
  {
    none: "spacing-0",
    narrow: "spacing-1",
    wide: "spacing-2",
  }
);
export const spaceLoose = createTheme( space, {
  none: "0",
  narrow: spaceScale(5),
  wide: spaceScale(10),
});

export const spaceDense = createTheme( space, {
  none: "0",
  narrow: spaceScale(3),
  wide: spaceScale(4),
});

export const color = createGlobalThemeContract(
  {
    "background-base": "background-base",
    "on-background-base": "on-background-base",
    "text-base": "text-base",
    "outline-primary": "outline-primary",
  },
  prefixVar("color")
);
createGlobalTheme(`:root,${brightClass(true)}`, color, {
  "background-base": "#fff",
  "on-background-base": "#ffe",
  "text-base": "#000",
  "outline-primary": "lch(70 98.01 146.6)",
});

createGlobalTheme(`${darkClass(true)}`, color, {
  "background-base": "#160b17",
  "on-background-base": "#2a142c",
  "text-base": "#fff",
  "outline-primary": "lch(70 98.01 146.6)",
});

export const utility = createGlobalThemeContract(
  {
    "focus-ring": "focus-ring",
  },
  prefixVar("utility")
);

createGlobalTheme(`:root`, utility, {
  "focus-ring": `2px solid ${color["outline-primary"]}`,
});

export const boxShadow = createGlobalThemeContract(
  {
    "focus-ring": "focus-ring",
  },
  prefixVar("box-shadow")
);
createGlobalTheme(`:root`, boxShadow, {
  "focus-ring": `0 0 0 2px #FFF, 0 0 0 4px #000, 0 0 0px 8px ${color["outline-primary"]}`,
});

export const shape = createGlobalThemeContract(
  {
    "action-base": "action-base",
    "panel-base": "panel-base",
  },
  prefixVar("shape")
);

createGlobalTheme(":root", shape, {
  "action-base": "4px",
  "panel-base": "8px",
});
