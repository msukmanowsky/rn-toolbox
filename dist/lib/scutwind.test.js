import { Dimensions } from "react-native";
import _ from "lodash";
import scutwind, { defaultConfig } from "./scutwind";
const setDimensions = ({ width, height }) => Dimensions.set({
    window: {
        fontScale: 2,
        scale: 2,
        width,
        height
    },
    screen: {
        fontScale: 2,
        scale: 2,
        width,
        height
    }
});
describe("breakpoints", () => {
    const breakpoints = _.chain(defaultConfig.breakpoints)
        .toPairs()
        .sortBy(1)
        .value();
    for (let [name, minWidth] of breakpoints) {
        test(`breakpoint ${name} works`, () => {
            setDimensions({ width: minWidth - 1, height: 100 });
            expect(scutwind(`${name}:text-center`)).toEqual({});
            setDimensions({ width: minWidth, height: 100 });
            expect(scutwind(`${name}:text-center`)).toEqual({ textAlign: "center" });
            setDimensions({ width: minWidth + 1, height: 100 });
            expect(scutwind(`${name}:text-center`)).toEqual({ textAlign: "center" });
        });
    }
});
