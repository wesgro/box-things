import {
  defineProperties,
  createSprinkles,
  createNormalizeValueFn,
  createMapValueFn,
  type ConditionalValue,
  type RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import { space, shape, color, utility, boxShadow } from "./theme/vars.css";
export const breakpoints = ["small", "medium", "large"] as const;
const layoutStyles = defineProperties({
  conditions: {
    small: {},
    medium: { "@media": "screen and (min-width: 768px)" },
    large: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "small",
  properties: {
    display: ["none", "flex", "block", "inline", "contents"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    padding: space,
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    borderRadius: shape,

    border: {
      thin: "1px",
      thick: "2px",
    },
    height: ["0", "100%"],
    // etc.
  },
  shorthands: {
    p: ["padding"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const pseudoStyles = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    active: { selector: "&:active" },
    focusVisible: { selector: "&:focus-visible" },
    hasFocusVisible: { selector: "&:has(:focus-visible)" },
  },
  defaultCondition: "default",
  properties: {
    backgroundColor: color,
    boxShadow: boxShadow,
    outline: utility,
    outlineOffset: {
      thin: "1px",
      thick: "3px",
    },
    outlineColor: color,
    outlineWidth: {
      none: "0",
      thin: "1px",
      thick: "2px",
    },
    color: color,
    borderColor: color,
  },
});

export const atoms = createSprinkles(layoutStyles, pseudoStyles);
// It's a good idea to export the Sprinkles type too
export type Atoms = Parameters<typeof atoms>[0];

export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof layoutStyles, Value>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof layoutStyles, Value>;
export type Space = keyof typeof space | "none";
export type ResponsiveSpace = RequiredResponsiveValue<Space>;
export const normalizeResponsiveValue = createNormalizeValueFn(layoutStyles);
export const mapResponsiveValue = createMapValueFn(layoutStyles);
