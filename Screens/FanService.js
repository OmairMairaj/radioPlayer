import React, { useRef, useState } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import fanStore from '../assets/fanstore.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import twitch from '../assets/twitch.png';
import { Linking } from 'react-native';


export default function FanService() {
    const navigation = useNavigation();

    const openURL = (url) => {
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    };


    const handleButtonClick = () => {
        const url = "https://app.ecwid.com/script.js?12564269&data_platform=code";  // Replace with your actual store URL
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    };



    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Fan Service</Text>
                {/* <View style={{ position: "absolute", right: 16, bottom: 16, backgroundColor: '#ffff' }}> */}
                <TouchableOpacity style={styles.iconButton} onPress={() => { }}>
                    <Icon name={"ellipsis-vertical"} style={styles.icon} />
                </TouchableOpacity>
                {/* </View> */}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={homebg} resizeMode="cover" style={styles.image}>
                <Header />
                <View style={styles.view}>
                    <View style={styles.box}>
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={handleButtonClick}>
                            <Image source={fanStore} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Fan Store</Text>
                        </TouchableOpacity>
                        {/* Twitter Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURL('https://twitter.com/stationlive_com')}>
                            <Image source={twitter} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Twitter</Text>
                        </TouchableOpacity>

                        {/* YouTube Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURL('https://youtube.com/@housestationlive/videos')}>
                            <Image source={youtube} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Youtube</Text>
                        </TouchableOpacity>

                        {/* Twitch Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURL('https://twitch.tv/housestationlive')}>
                            <Image source={twitch} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Twitch</Text>
                        </TouchableOpacity>

                        {/* Instagram Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURL('https://instagram.com/housestationlive')}>
                            <Image source={instagram} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Instagram</Text>
                        </TouchableOpacity>

                        {/* Facebook Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURL('https://facebook.com/housestationlive')}>
                            <Image source={facebook} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width,
        // backgroundColor: '#0e1628',
        // paddingTop: Platform.OS === 'ios' ? 0 : 30,
        // paddingHorizontal: 20,
        // alignItems: "center",
        // justifyContent: "center",
        // height: '100%',
    },
    image: {
        flex: 1,
        // justifyContent: "center"
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
    view: {
        marginTop: 50,
        justifyContent: "center",
        width: '100%',
        // backgroundColor: 'rgba(1, 26, 66, 0.5)',
    },
    box: {
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        // backgroundColor: 'rgba(1, 255, 66, 0.5)',
    },
    button: {
        // width: '40%',
        width: 150,
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
        resizeMode: 'cover',
    },
    buttonText: {
        color: '#fdf9f8',
        // fontWeight: 'bold',
        // fontSize: 20,
        textAlign: 'center',
        fontFamily: (Platform.OS === 'ios') ? 'Permanent Marker' : 'permanentmarker_regular',
        marginTop: 10,
    }
});
