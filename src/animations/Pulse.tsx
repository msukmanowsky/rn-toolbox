import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

interface DefaultProps {
  autoRun: boolean;
  duration: number;
}

export interface PulseProps extends ViewProps, DefaultProps {
  scale: number;
  children?: ReactNode | ReactNode[];
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

  static defaultProps: DefaultProps = {
    autoRun: true,
    duration: 200
  };

  constructor(props: PulseProps) {
    super(props);
    this.value = new Animated.Value(1);
  }

  animate = () => {
    Animated.timing(this.value, {
      toValue: this.props.scale,
      // See https://material.io/design/motion/speed.html#duration
      duration: this.props.duration,
      easing: Easing.inOut(Easing.ease)
    }).start();
  };

  reset = () => {
    this.value.setValue(1);
  };

  componentDidMount() {
    if (this.props.autoRun) {
      this.animate();
    }
  }

  render() {
    const { style, children, ...rest } = this.props;

    return (
      <Animated.View
        style={[
          style,
          {
            transform: [{ scale: this.value }]
          }
        ]}
        {...rest}
      >
        {children}
      </Animated.View>
    );
  }
}
