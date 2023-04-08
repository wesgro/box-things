import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import {space, shape, color} from "./theme/vars.css";

const responsiveProperties = defineProperties({
    conditions: {
        small: {},
        medium: { "@media": "screen and (min-width: 768px)" },
        large: { "@media": "screen and (min-width: 1024px)" }
    },
    defaultCondition: "small",
    dynamicProperties: {
        display: true,
        flexDirection: true,
        alignItems: true,
        justifyContent: true,
        gap: space,
        padding: space,
        paddingLeft: space,
        paddingRight: space,
        paddingTop: space,
        paddingBottom: space,
        width: true,
        height: true,
        borderRadius: shape,
        textAlign: true,
        zIndex: true,
        position: true,
        top: true,
        left: true,
        right: true,
        bottom: true,
        verticalAlign: true,
        margin: space,
        marginBottom: space,
        marginLeft: space,
        marginRight: space,
        marginTop: space,
        gridTemplateColumns: true
    },
    staticProperties: {
        display: ["block", "flex", "inline-block", "inline-flex", "contents"],
        border: {
            "thin": "1px",
            "thick": "2px",
        }
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
        size: ["height", "width"]
    }
});

const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
        darkMode: { "@media": "(prefers-color-scheme: dark)" }
    },
    defaultCondition: "lightMode",
    dynamicProperties: {
        color: color,
        backgroundColor: color,
    },
    shorthands: {}
});

export const rainbowSprinkles = createRainbowSprinkles(
    responsiveProperties,
    colorProperties
);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
