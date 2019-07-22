import React, { Component } from 'react';
import { View, Image, Animated, StyleSheet, Easing } from 'react-native';

export default class Windmill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinnerDegree: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        Animated.loop(
            Animated.timing(this.state.spinnerDegree, {
                duration: 3000,
                toValue: 1,
                easing: Easing.linear
            })
        ).start();
    }
    render() {
        const spinnerInterpolation = this.state.spinnerDegree.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const animatedStyles = {
            transform: [{
                rotate: spinnerInterpolation
            }]
        }
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[styles.car]}
                    source={require("../assets/car.png")}
                    resizeMode="contain"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    }, car: {
        width: 200,
        height: 200
    }
});