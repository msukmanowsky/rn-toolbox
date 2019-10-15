import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

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
export default class SlideAndFadeIn extends React.Component<
  SlideAndFadeInProps,
  State
> {
  value: Animated.Value<number>;

  static defaultProps: DefaultProps = {
    autoRun: true,
    direction: "up",
    duration: 150,
    slideBy: 200
  };

  constructor(props: SlideAndFadeInProps) {
    super(props);
    this.value = new Animated.Value(0);
    this._updateTransforms();
  }

  animate = () => {
    Animated.timing(this.value, {
      toValue: 1,
      // See https://material.io/design/motion/speed.html#duration
      duration: this.props.duration,
      easing: Easing.out(Easing.ease)
    }).start();
  };

  _updateTransforms = () => {
    const { slideBy, direction } = this.props;
    switch (direction) {
      case "up":
        this.setState({
          property: "translateY",
          outputRange: [-slideBy, 0]
        });
        break;
      case "down":
        this.setState({
          property: "translateY",
          outputRange: [slideBy, 0]
        });
        break;
      case "right":
        this.setState({
          property: "translateX",
          outputRange: [-slideBy, 0]
        });
        break;
      case "left":
        this.setState({
          property: "translateX",
          outputRange: [slideBy, 0]
        });
        break;
    }
  };

  reset = () => {
    this.value.setValue(0);
  };

  componentDidMount() {
    if (this.props.autoRun) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps: SlideAndFadeInProps) {
    const { slideBy, direction } = this.props;
    if (prevProps.slideBy !== slideBy || prevProps.direction !== direction) {
      this._updateTransforms();
    }
  }

  render() {
    const { style, children, ...rest } = this.props;
    const { property, outputRange } = this.state;

    return (
      <Animated.View
        style={[
          style,
          {
            opacity: this.value,
            transform: [
              {
                [property]: this.value.interpolate({
                  inputRange: [0, 1],
                  outputRange
                })
              }
            ]
          }
        ]}
        {...rest}
      >
        {children}
      </Animated.View>
    );
  }
}
