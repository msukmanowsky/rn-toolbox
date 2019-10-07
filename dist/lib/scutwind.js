/**
 * Like Tailwind, but a lil more compact and intended for React Native.
 */
import _ from "lodash";
import { StyleSheet, Dimensions } from "react-native";
const defaultConfig = {
    rem: 16,
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    },
    spacing: {
        "1": 0.25,
        "2": 0.5,
        "3": 0.75,
        "4": 1,
        "5": 1.25,
        "6": 1.5,
        "8": 2,
        "10": 2.5,
        "12": 3,
        "16": 4,
        "20": 5,
        "24": 6,
        "32": 8,
        "40": 10,
        "48": 12,
        "56": 14,
        "64": 16
    },
    fontSizes: {
        xs: 0.75,
        sm: 0.875,
        base: 1,
        lg: 1.125,
        xl: 1.25,
        "2xl": 1.5,
        "3xl": 1.875,
        "4xl": 2.25,
        "5xl": 3,
        "6xl": 4
    },
    letterSpacing: {
        tighter: -0.05,
        tight: -0.025,
        normal: 0,
        wide: 0.025,
        wider: 0.05,
        widest: 0.1
    },
    colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        gray: {
            100: "#f7fafc",
            200: "#edf2f7",
            300: "#e2e8f0",
            400: "#cbd5e0",
            500: "#a0aec0",
            600: "#718096",
            700: "#4a5568",
            800: "#2d3748",
            900: "#1a202c"
        },
        red: {
            100: "#fff5f5",
            200: "#fed7d7",
            300: "#feb2b2",
            400: "#fc8181",
            500: "#f56565",
            600: "#e53e3e",
            700: "#c53030",
            800: "#9b2c2c",
            900: "#742a2a"
        },
        orange: {
            100: "#fffaf0",
            200: "#feebc8",
            300: "#fbd38d",
            400: "#f6ad55",
            500: "#ed8936",
            600: "#dd6b20",
            700: "#c05621",
            800: "#9c4221",
            900: "#7b341e"
        },
        yellow: {
            100: "#fffff0",
            200: "#fefcbf",
            300: "#faf089",
            400: "#f6e05e",
            500: "#ecc94b",
            600: "#d69e2e",
            700: "#b7791f",
            800: "#975a16",
            900: "#744210"
        },
        green: {
            100: "#f0fff4",
            200: "#c6f6d5",
            300: "#9ae6b4",
            400: "#68d391",
            500: "#48bb78",
            600: "#38a169",
            700: "#2f855a",
            800: "#276749",
            900: "#22543d"
        },
        teal: {
            100: "#e6fffa",
            200: "#b2f5ea",
            300: "#81e6d9",
            400: "#4fd1c5",
            500: "#38b2ac",
            600: "#319795",
            700: "#2c7a7b",
            800: "#285e61",
            900: "#234e52"
        },
        blue: {
            100: "#ebf8ff",
            200: "#bee3f8",
            300: "#90cdf4",
            400: "#63b3ed",
            500: "#4299e1",
            600: "#3182ce",
            700: "#2b6cb0",
            800: "#2c5282",
            900: "#2a4365"
        },
        indigo: {
            100: "#ebf4ff",
            200: "#c3dafe",
            300: "#a3bffa",
            400: "#7f9cf5",
            500: "#667eea",
            600: "#5a67d8",
            700: "#4c51bf",
            800: "#434190",
            900: "#3c366b"
        },
        purple: {
            100: "#faf5ff",
            200: "#e9d8fd",
            300: "#d6bcfa",
            400: "#b794f4",
            500: "#9f7aea",
            600: "#805ad5",
            700: "#6b46c1",
            800: "#553c9a",
            900: "#44337a"
        },
        pink: {
            100: "#fff5f7",
            200: "#fed7e2",
            300: "#fbb6ce",
            400: "#f687b3",
            500: "#ed64a6",
            600: "#d53f8c",
            700: "#b83280",
            800: "#97266d",
            900: "#702459"
        }
    },
    borderRadius: {
        none: 0,
        sm: 0.125,
        default: 0.25,
        lg: 0.5
    }
};
function makeStyles(config) {
    const finalizedConfig = Object.assign(Object.assign({}, defaultConfig), config);
    const { rem } = finalizedConfig;
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    // Border radius
    const borderRadius = _.chain(finalizedConfig.borderRadius)
        .flatMap((relativeValue, name) => {
        const suffix = name === "default" ? "" : `-${name}`;
        return [
            [`rounded${suffix}`, { borderRadius: rem * relativeValue }],
            [
                `rounded-t${suffix}`,
                {
                    borderTopLeftRadius: rem * relativeValue,
                    borderTopRightRadius: rem * relativeValue
                }
            ],
            [
                `rounded-b${suffix}`,
                {
                    borderBottomLeftRadius: rem * relativeValue,
                    borderBottomRightRadius: rem * relativeValue
                }
            ],
            [
                `rounded-l${suffix}`,
                {
                    borderBottomLeftRadius: rem * relativeValue,
                    borderTopLeftRadius: rem * relativeValue
                }
            ],
            [
                `rounded-r${suffix}`,
                {
                    borderBottomRightRadius: rem * relativeValue,
                    borderTopRightRadius: rem * relativeValue
                }
            ],
            [
                `rounded-tl${suffix}`,
                { borderTopLeftRadius: rem * relativeValue }
            ],
            [
                `rounded-tr${suffix}`,
                { borderTopRightRadius: rem * relativeValue }
            ],
            [
                `rounded-bl${suffix}`,
                { borderBottomLeftRadius: rem * relativeValue }
            ],
            [
                `rounded-br${suffix}`,
                { borderBottomRightRadius: rem * relativeValue }
            ]
        ];
    })
        .fromPairs()
        .value();
    // Margin and padding classes
    const marginAndPadding = _.chain(finalizedConfig.spacing)
        .flatMap((relativeValue, key) => {
        const value = rem * relativeValue;
        return [
            [`p-${key}`, { padding: value }],
            [`pt-${key}`, { paddingTop: value }],
            [`pb-${key}`, { paddingBottom: value }],
            [`pl-${key}`, { paddingLeft: value }],
            [`pr-${key}`, { paddingRight: value }],
            [`px-${key}`, { paddingHorizontal: value }],
            [`py-${key}`, { paddingVertical: value }],
            [`m-${key}`, { margin: value }],
            [`mt-${key}`, { marginTop: value }],
            [`mb-${key}`, { marginBottom: value }],
            [`ml-${key}`, { marginLeft: value }],
            [`mr-${key}`, { marginRight: value }],
            [`mx-${key}`, { marginHorizontal: value }],
            [`my-${key}`, { marginVertical: value }]
        ];
    })
        .concat([
        ["p-0", { padding: 0 }],
        ["p-px", { padding: 1 }],
        ["pt-0", { paddingTop: 0 }],
        ["pt-px", { paddingTop: 1 }],
        ["pb-0", { paddingBottom: 0 }],
        ["pb-px", { paddingBottom: 1 }],
        ["pl-0", { paddingLeft: 0 }],
        ["pl-px", { paddingLeft: 1 }],
        ["pr-0", { paddingRight: 0 }],
        ["pr-px", { paddingRight: 1 }],
        ["py-0", { paddingVertical: 0 }],
        ["py-px", { paddingVertical: 1 }],
        ["px-0", { paddingHorizontal: 0 }],
        ["px-px", { paddingHorizontal: 1 }],
        ["m-0", { margin: 0 }],
        ["m-px", { margin: 1 }],
        ["mt-0", { marginTop: 0 }],
        ["mt-px", { marginTop: 1 }],
        ["mb-0", { marginBottom: 0 }],
        ["mb-px", { marginBottom: 1 }],
        ["ml-0", { marginLeft: 0 }],
        ["ml-px", { marginLeft: 1 }],
        ["mr-0", { marginRight: 0 }],
        ["mr-px", { marginRight: 1 }],
        ["my-0", { marginVertical: 0 }],
        ["my-px", { marginVertical: 1 }],
        ["mx-0", { marginHorizontal: 0 }],
        ["mx-px", { marginHorizontal: 1 }]
    ])
        .fromPairs()
        .value();
    const fontSizes = _
        .chain(finalizedConfig.fontSizes)
        .map((size, name) => [`text-${name}`, { fontSize: rem * size }])
        .fromPairs()
        .value();
    const letterSpacing = _
        .chain(finalizedConfig.letterSpacing)
        .map((spacing, name) => [`tracking-${name}`, { letterSpacing: rem * spacing }])
        .fromPairs()
        .value();
    const colors = _.chain(finalizedConfig.colors)
        .flatMap((color, name) => {
        if (!_.isObject(color)) {
            return [[name, color]];
        }
        return _.map(color, (value, key) => {
            const suffix = key === "default" ? "" : `-${key}`;
            return [`${name}${suffix}`, value];
        });
    })
        .flatMap(([name, color]) => [
        [`bg-${name}`, { backgroundColor: color }],
        [`border-${name}`, { borderColor: color }],
        [`text-${name}`, { color }]
    ])
        .fromPairs()
        .value();
    const textAlignment = {
        "text-left": { textAlign: "left" },
        "text-center": { textAlign: "center" },
        "text-right": { textAlign: "right" },
        "text-justify": { textAlign: "justify" },
        "text-bottom": { textAlignVertical: "bottom" },
        "text-middle": { textAlignVertical: "center" },
        "text-top": { textAlignVertical: "top" }
    };
    const textTransform = {
        uppercase: { textTransform: "uppercase" },
        lowercase: { textTransform: "lowercase" },
        capitalize: { textTransform: "capitalize" }
    };
    const baseFontWeight = {
        "font-hairline": 100,
        "font-thin": 200,
        "font-light": 300,
        "font-normal": 400,
        "font-medium": 500,
        "font-semibold": 600,
        "font-bold": 700,
        "font-extrabold": 800,
        "font-black": 900
    };
    const fontWeight = _.chain(baseFontWeight)
        .map((weight, name) => [name, { fontWeight: `${weight}` }])
        .fromPairs()
        .value();
    const flexDirection = {
        "flex-row": { flexDirection: "row" },
        "flex-row-reverse": { flexDirection: "row-reverse" },
        "flex-col": { flexDirection: "column" },
        "flex-col-reverse": { flexDirection: "column-reverse" },
    };
    const flexWrap = {
        "flex-no-wrap": { flexWrap: "nowrap" },
        "flex-wrap": { flexWrap: "wrap" },
        "flex-wrap-reverse": { flexWrap: "wrap-reverse" },
    };
    const alignItems = {
        "items-stretch": { alignItems: "stretch" },
        "items-start": { alignItems: "flex-start" },
        "items-center": { alignItems: "center" },
        "items-end": { alignItems: "flex-end" },
        "items-baseline": { alignItems: "baseline" },
    };
    const justifyContent = {
        "justify-start": { justifyContent: "flex-start" },
        "justify-center": { justifyContent: "center" },
        "justify-end": { justifyContent: "flex-end" },
        "justify-between": { justifyContent: "space-between" },
        "justify-around": { justifyContent: "space-around" },
        "justify-evenly": { justifyContent: "space-evenly" },
    };
    const alignSelf = {
        "self-auto": { alignSelf: "auto" },
        "self-start": { alignSelf: "flex-start" },
        "self-center": { alignSelf: "center" },
        "self-end": { alignSelf: "flex-end" },
        "self-stretch": { alignSelf: "stretch" },
        "self-baseline": { alignSelf: "baseline" },
    };
    const flexGrow = {
        "flex-grow": { flexGrow: 1 },
        "flex-grow-0": { flexGrow: 0 },
    };
    const styles = StyleSheet.create(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, marginAndPadding), borderRadius), fontSizes), letterSpacing), textAlignment), textTransform), fontWeight), colors), flexDirection), flexWrap), alignItems), justifyContent), alignSelf), flexGrow));
    // Memoize since this is expensive
    const styleKeys = _.keys(styles);
    function getStyles(styleOrStyles) {
        if (_.isString(styleOrStyles)) {
            styleOrStyles = styleOrStyles.split(/\s+/);
        }
        const notFound = _.difference(styleOrStyles, styleKeys);
        if (notFound.length > 0) {
            console.warn(`No matching style(s) found for: ${notFound.join(", ")}`);
        }
        return StyleSheet.flatten(_.chain(_.pick(styles, styleOrStyles))
            .values()
            .value());
    }
    getStyles.styles = styles;
    return getStyles;
}
let styles = makeStyles(defaultConfig);
Dimensions.addEventListener("change", () => {
    styles = makeStyles(defaultConfig);
});
export { defaultConfig, styles };
