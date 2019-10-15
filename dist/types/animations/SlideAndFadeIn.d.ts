import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
interface DefaultProps {
    autoRun: boolean;
    direction: "up" | "down" | "left" | "right";
    slideBy: number;
    duration: number;
}
export interface SlideAndFadeInProps extends ViewProps, DefaultProps {
    scale: number;
    children?: ReactNode[];
}
interface State {
    property: string;
    outputRange: [number, number];
}
export default class SlideAndFadeIn extends React.Component<SlideAndFadeInProps, State> {
    value: Animated.Value<number>;
    static defaultProps: DefaultProps;
    constructor(props: SlideAndFadeInProps);
    animate: () => void;
    _updateTransforms: () => void;
    reset: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SlideAndFadeInProps): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=SlideAndFadeIn.d.ts.map