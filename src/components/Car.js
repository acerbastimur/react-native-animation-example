import React, { Component } from 'react';
import { View, Image, Animated, StyleSheet, Easing } from 'react-native';
import CarBody from './CarBody';
import Tire from './Tire';
export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.car}>
                    <View style={{ zIndex: 9999, }}>
                        <CarBody style={styles.carBody} />

                    </View>
                    <View style={styles.tire1} >
                        <Tire />
                    </View>
                    <View style={styles.tire2} >
                        <Tire />
                    </View>
                </View>

            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {

    }, car: {
        position: "relative",
        height: 200,
        width: 200
    }, carBody: {
        width: 200,
        height: 200,
        position: "absolute",
        zIndex: 999
    },
    tire1: {
        bottom: -8 ,
        left: 4,
        position: "absolute",
        zIndex: 99999
    }, tire2: {
        bottom: 0,
        right: 5,
        position: "absolute",
    }
});