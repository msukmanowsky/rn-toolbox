import React from "react";
import Animated, { Easing } from "react-native-reanimated";
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
export default class Pulse extends React.Component {
    constructor(props) {
        super(props);
        this.animate = () => {
            Animated.timing(this.value, {
                toValue: this.props.scale,
                // See https://material.io/design/motion/speed.html#duration
                duration: this.props.duration,
                easing: Easing.inOut(Easing.ease)
            }).start();
        };
        this.reset = () => {
            this.value.setValue(1);
        };
        this.value = new Animated.Value(1);
    }
    componentDidMount() {
        if (this.props.autoRun) {
            this.animate();
        }
    }
    render() {
        const { style, children, ...rest } = this.props;
        return (React.createElement(Animated.View, Object.assign({ style: [
                style,
                {
                    transform: [{ scale: this.value }]
                }
            ] }, rest), children));
    }
}
Pulse.defaultProps = {
    autoRun: true,
    duration: 200
};
