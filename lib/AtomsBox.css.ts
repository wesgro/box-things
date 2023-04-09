import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { space, shape, color } from "./theme/vars.css";

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

const colorStyles = defineProperties({
  properties: {
    color: color,
    backgroundColor: color,
    borderColor: color,
  },
});

export const atoms = createSprinkles(layoutStyles, colorStyles);
// It's a good idea to export the Sprinkles type too
export type Atoms = Parameters<typeof atoms>[0];
