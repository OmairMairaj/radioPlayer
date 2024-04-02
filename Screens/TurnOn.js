import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import mono from '../assets/MONO.png';
import surround from '../assets/SURROUND.png';
import support from '../assets/SUPPORT.png';


export default function TurnOn() {
    const navigation = useNavigation();

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>turn me on</Text>
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
                <View style={styles.view}>
                    <View style={styles.box}>
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => navigation.navigate("HD")}>
                            <Image source={surround} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>HD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => navigation.navigate("LQ")}>
                            <Image source={mono} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>LQ</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity activeOpacity={1} style={styles.button2} onPress={() => navigation.navigate("Donate")}>
                            <Image source={support} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Donate</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: "rgba(1, 26, 66, 0.5)",
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
    view: {
        marginTop: 50,
        justifyContent: "center",
        width: '100%',
    },
    box: {
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    box2: {
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(140, 140, 140, 0.5)',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        width: '80%',
        height: 150,
        backgroundColor: 'rgba(140, 140, 140, 0.5)',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    buttonText: {
        color: '#fdf9f8',
        textAlign: 'center',
        fontFamily: (Platform.OS === 'ios') ? 'Permanent Marker' : 'permanentmarker_regular',
        marginTop: 10,
    }

});
