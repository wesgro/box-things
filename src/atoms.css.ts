import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const colors = {
    blue50: "#eff6ff",
    blue100: "#dbeafe",
    blue200: "#bfdbfe"
    // etc.
};
const space = {
    'none': 0,
    'small': '4px',
    'medium': '8px',
    'large': '16px',
    // etc.
};

const layoutStyles = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        // etc.
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        placeItems: ['justifyContent', 'alignItems'],
    }
});

// const layoutStyles = defineProperties({
//     conditions: {
//         mobile: {},
//         tablet: { '@media': 'screen and (min-width: 768px)' },
//         desktop: { '@media': 'screen and (min-width: 1024px)' }
//     },
//     defaultCondition: "mobile",
//     properties: {
//         display: ["none", "block", "flex"],
//         flexDirection: ["row", "column"],
//         paddingTop: space,
//         paddingBottom: space,
//         paddingLeft: space,
//         paddingRight: space
//         // etc...
//     },
//     shorthands: {
//         padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
//         px: ["paddingLeft", "paddingRight"],
//         py: ["paddingTop", "paddingBottom"],
//         pl: "paddingLeft",
//         pr: "paddingRight"
//     }
// });

const colorStyles = defineProperties({
    conditions: {
        lightMode: { "@media": "(prefers-color-scheme: light)" },
        darkMode: { "@media": "(prefers-color-scheme: dark)" }
    },
    defaultCondition: false,
    properties: {
        color: colors,
        background: colors
    }
    // etc.
});

export const atoms = createSprinkles(layoutStyles, colorStyles);
