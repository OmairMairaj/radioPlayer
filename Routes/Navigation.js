import React from 'react'
import { StyleSheet } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import { Easing } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import TurnOn from '../Screens/TurnOn';
import { useNavigation } from "@react-navigation/native";
import Help from '../Screens/Help';
import FanService from '../Screens/FanService';

const MainStack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.ease,
    }
}


const MainNaviagtion = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                // detachPreviousScreen: !navigation.isFocused(),
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },

            }}
        >
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="TurnOn" component={TurnOn} />
            <MainStack.Screen name="FanService" component={FanService} />
            <MainStack.Screen name="Help" component={Help} />
        </MainStack.Navigator >
    )
}


export default function Navigation() {
    return (
        <>
            <NavigationContainer style={{ backgroundColor: '#0C111E' }}>
                <MainNaviagtion />
            </NavigationContainer>
        </>
    )
}