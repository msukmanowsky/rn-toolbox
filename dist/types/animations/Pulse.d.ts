import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
interface DefaultProps {
    autoRun: boolean;
    duration: number;
}
export interface PulseProps extends ViewProps, DefaultProps {
    scale: number;
    children?: ReactNode[];
}
interface State {
    value: Animated.Value<number>;
}
/**
 * Wrapper View that uses react-native-reanimated to quickly pulse a View and
 * it's subviews (scales the View).
 *
 * ```typescript
 * <Pulse scale={2}>
 *   <Text>Hello</Text>
 * </Pulse>
 * ```
 *
 * If you don't want the animation to run immediately, you can pass
 * autoRun={false} and then use a ref to trigger animation.
 * ```typescript
 * const pulse = useRef(null);
 * <Pulse scale={2} autoRun={false} ref={pulse}>
 *   <Text>Hello</Text>
 * </Pulse>
 * // Elsewhere in your code
 * pulse.current.animate();
 * ```
 */
export default class Pulse extends React.Component<PulseProps, State> {
    value: Animated.Value<number>;
    static defaultProps: DefaultProps;
    constructor(props: PulseProps);
    animate: () => void;
    reset: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Pulse.d.ts.map