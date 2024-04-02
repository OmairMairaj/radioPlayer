import React, { useRef, useState } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import { Animated } from 'react-native';
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import page1 from '../assets/page1.png'
import page2 from '../assets/page2.png'
import page3 from '../assets/page3.png'
import page4 from '../assets/page4.png'


export default function Home() {
    const navigation = useNavigation();

    const imageHeight1 = useRef(new Animated.Value(Dimensions.get('window').height * 0.5)).current;
    const imageHeight2 = useRef(new Animated.Value(Dimensions.get('window').height * 0.1)).current;
    const imageHeight3 = useRef(new Animated.Value(Dimensions.get('window').height * 0.1)).current;
    const imageHeight4 = useRef(new Animated.Value(Dimensions.get('window').height * 0.1)).current;


    const [image1Expanded, setIsImage1Expanded] = useState(true);
    const [image2Expanded, setIsImage2Expanded] = useState(false);
    const [image3Expanded, setIsImage3Expanded] = useState(false);
    const [image4Expanded, setIsImage4Expanded] = useState(false);


    const handleClick = (imgNo, route) => {
        Animated.parallel([
            Animated.timing(imageHeight1, { toValue: imgNo === 1 ? Dimensions.get('window').height * 0.5 : Dimensions.get('window').height * 0.1, duration: 300, useNativeDriver: false }),
            Animated.timing(imageHeight2, { toValue: imgNo === 2 ? Dimensions.get('window').height * 0.5 : Dimensions.get('window').height * 0.1, duration: 300, useNativeDriver: false }),
            Animated.timing(imageHeight3, { toValue: imgNo === 3 ? Dimensions.get('window').height * 0.5 : Dimensions.get('window').height * 0.1, duration: 300, useNativeDriver: false }),
            Animated.timing(imageHeight4, { toValue: imgNo === 4 ? Dimensions.get('window').height * 0.5 : Dimensions.get('window').height * 0.1, duration: 300, useNativeDriver: false }),
        ]).start();


        if (imgNo === 1) {
            if (!image1Expanded) {
                setIsImage1Expanded(true);
                setIsImage2Expanded(false);
                setIsImage3Expanded(false);
                setIsImage4Expanded(false);
            } else {
                navigation.navigate(route);
            }
        }
        if (imgNo === 2) {
            if (!image2Expanded) {
                setIsImage2Expanded(true);
                setIsImage1Expanded(false);
                setIsImage3Expanded(false);
                setIsImage4Expanded(false);
            } else {
                navigation.navigate(route);
            }
        }
        if (imgNo === 3) {
            if (!image3Expanded) {
                setIsImage3Expanded(true);
                setIsImage1Expanded(false);
                setIsImage2Expanded(false);
                setIsImage4Expanded(false);
            } else {
                navigation.navigate(route);
            }
        }
        if (imgNo === 4) {
            if (!image4Expanded) {
                setIsImage4Expanded(true);
                setIsImage1Expanded(false);
                setIsImage2Expanded(false);
                setIsImage3Expanded(false);
            } else {
                navigation.navigate(route);
            }
        }
    };



    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>House Station Live!</Text>
                <TouchableOpacity style={styles.iconButton} onPress={() => { }}>
                    <Icon name={"ellipsis-vertical"} style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={homebg} resizeMode="cover" style={styles.image}>
                <Header />
                <View style={{ flex: 1 }}>
                    {/* <TouchableOpacity onPress={() => handleClick(1, 'Product')} style={[styles.imageContainer, { height: image1Expanded ? '60%' : '10%' }]}>
                        <Image source={page1} style={image1Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick(2, 'Home')} style={[styles.imageContainer, { height: image2Expanded ? '60%' : '10%' }]}>
                        <Image source={page2} style={image2Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick(3, 'Home')} style={[styles.imageContainer, { height: image3Expanded ? '60%' : '10%' }]}>
                        <Image source={page3} style={image3Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick(4, 'Home')} style={[styles.imageContainer, { height: image4Expanded ? '60%' : '10%' }]}>
                        <Image source={page4} style={image4Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                    </TouchableOpacity> */}
                    <TouchableOpacity activeOpacity={1} onPress={() => handleClick(1, 'TurnOn')}>
                        <Animated.View style={[styles.imageContainer, { height: imageHeight1 }]}>
                            <Image source={page1} style={image1Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => handleClick(2, 'Mixes')}>
                        <Animated.View style={[styles.imageContainer, { height: imageHeight2 }]}>
                            <Image source={page2} style={image2Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => handleClick(3, 'FanService')}>
                        <Animated.View style={[styles.imageContainer, { height: imageHeight3 }]}>
                            <Image source={page3} style={image3Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => handleClick(4, 'Help')}>
                        <Animated.View style={[styles.imageContainer, { height: imageHeight4 }]}>
                            <Image source={page4} style={image4Expanded ? styles.imageExpandedStyle : styles.imageStyle} />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        flex: 1,
    },
    header: {
        height: (Platform.OS === 'ios') ? 70 : 50,
        // padding: 10,
        backgroundColor: "rgba(1, 26, 66, 0.5)",
        // opacity: 0.5,
        // marginTop: -50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    backButton: {
        position: "absolute",
        left: 16,
        bottom: 0,
        padding: 5,
    },
    title: {
        color: "#fdf9f8",
        // fontWeight: "bold",
        fontFamily: (Platform.OS === 'ios') ? 'Indie Flower' : 'indieflower_regular',
        fontSize: 26,
    },
    iconButton: {
        position: "absolute",
        right: 16,
        bottom: 1,
        padding: 5,
    },
    icon: {
        color: '#b45575',
        fontSize: 25,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    imageContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5.00,
        elevation: 24,
        backgroundColor: '#000',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageExpandedStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

});
