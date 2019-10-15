import React from "react";
import Animated, { Easing } from "react-native-reanimated";
export default class SlideAndFadeIn extends React.Component {
    constructor(props) {
        super(props);
        this.animate = () => {
            Animated.timing(this.value, {
                toValue: 1,
                // See https://material.io/design/motion/speed.html#duration
                duration: this.props.duration,
                easing: Easing.out(Easing.ease)
            }).start();
        };
        this._updateTransforms = () => {
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
        this.reset = () => {
            this.value.setValue(0);
        };
        this.value = new Animated.Value(0);
    }
    componentDidMount() {
        if (this.props.autoRun) {
            this.animate();
        }
    }
    componentDidUpdate(prevProps) {
        const { slideBy, direction } = this.props;
        if (prevProps.slideBy !== slideBy || prevProps.direction !== direction) {
            this._updateTransforms();
        }
    }
    render() {
        const { style, children, ...rest } = this.props;
        const { property, outputRange } = this.state;
        return (React.createElement(Animated.View, Object.assign({ style: [
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
            ] }, rest), children));
    }
}
SlideAndFadeIn.defaultProps = {
    autoRun: true,
    direction: "up",
    duration: 150,
    slideBy: 200
};
