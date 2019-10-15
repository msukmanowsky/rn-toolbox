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
    children?: ReactNode | ReactNode[];
}
interface State {
    property: string;
    outputRange: [number, number];
}
/**
 * Wrapper View that uses react-native-reanimated to slide and fade in a View
 * and it's subviews.
 *
 * ```typescript
 * <SlideAndFadeIn direction="up">
 *   <Text>Hello</Text>
 * </SlideAndFadeIn>
 * ```
 *
 * If you don't want the animation to run immediately, you can pass
 * autoRun={false} and then use a ref to trigger animation.
 * ```typescript
 * const slideAndFadeIn = useRef(null);
 * <SlideAndFadeIn ref={slideAndFadeIn}>
 *   <Text>Hello</Text>
 * </SlideAndFadeIn>
 * // Elsewhere in your code
 * slideAndFadeIn.current.animate();
 * ```
 */
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