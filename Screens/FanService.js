import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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


    const handleButtonClick = () => {
        const url = "http://hsl.company.site";
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    };

    const openURLInApp = async (appURL, webURL) => {
        try {
            const canOpen = await Linking.canOpenURL(appURL);
            console.log(canOpen);
            if (canOpen) {
                console.log('URL opened in app')
                await Linking.openURL(appURL);
            } else {
                console.log('URL opened in browser')
                await Linking.openURL(webURL);
            }
        } catch (error) {
            console.error('An error occurred while trying to open the URL:', error);
        }
    };


    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Fan Service</Text>
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
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={handleButtonClick}>
                            <Image source={fanStore} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Fan Store</Text>
                        </TouchableOpacity>

                        {/* Twitter Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURLInApp('twitter://user?screen_name=stationlive_com', 'https://twitter.com/stationlive_com')}>
                            <Image source={twitter} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Twitter</Text>
                        </TouchableOpacity>

                        {/* Youtube Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURLInApp('youtube://user/HouseStationLive', 'https://youtube.com/@housestationlive/videos')}>
                            <Image source={youtube} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Youtube</Text>
                        </TouchableOpacity>

                        {/* Twitch Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURLInApp('twitch://stream/housestationlive', 'https://twitch.tv/housestationlive')}>
                            <Image source={twitch} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Twitch</Text>
                        </TouchableOpacity>

                        {/* Instagram Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURLInApp('instagram://user?username=housestationlive', 'https://instagram.com/housestationlive')}>
                            <Image source={instagram} style={styles.imageStyle} />
                            <Text style={styles.buttonText}>Instagram</Text>
                        </TouchableOpacity>

                        {/* Facebook Button */}
                        <TouchableOpacity activeOpacity={1} style={styles.button} onPress={() => openURLInApp('https://facebook.com/profile.php/?id=100063740344776', 'https://facebook.com/housestationlive')}>
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
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonText: {
        color: '#fdf9f8',
        textAlign: 'center',
        fontFamily: (Platform.OS === 'ios') ? 'Permanent Marker' : 'permanentmarker_regular',
        marginTop: 10,
    }
});



