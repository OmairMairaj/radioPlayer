import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import js from '../js/lunaradio.min.js';
import base64Script from '../components/base64Convert.js';
export default function HD() {
    const navigation = useNavigation();

    const radioPlayerHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            /* Your CSS here */
        </style>
        <script src="data:text/javascript;base64,${base64Script}"></script>
    </head>
    <body>
        <div id="lunaradio" style='...'>
            <!-- Content here -->
        </div>
        <script>
        window.addEventListener("load", function () {
            lunaRadio("lunaradio",{ token: "WmFnZVdlZlNmW2FgXltoVyBVYV8=",
            userinterface: "big",
            backgroundcolor: "rgba(91,91,91,0.67)",
            fontcolor: "#b45575",
            hightlightcolor: "#b45575",
            fontname: "",
            googlefont: "open+sans:600",
            fontratio: "0.9",
            radioname: "housestationlive.",
            offlinetext: "Radio is offline",
            scroll: "true",
            scrollradioname: "left",
            scrolltitle: "right",
            scrollradionamespeed: "0.25",
            scrolltitlespeed: "0.25",
            coverimage: "",
            onlycoverimage: "true",
            coverstyle: "circle",
            usevisualizer: "real",
            visualizertype: "7",
            multicolorvisualizer: "true",
            color1: "#fdf9f8",
            color2: "#fdf9f8",
            color3: "#fdf9f8",
            color4: "#fdf9f8",
            visualizeropacity: "1.0",
            visualizerghost: "0.0",
            visualizerblur: "4",
            visualizerghostblur: "0",
            itunestoken: "1000lIPN",
            metadatatechnic: "fallback",
            ownmetadataurl: "",
            streamurl: "https://c2.radioboss.fm:8224/320k.mp3",
            streamtype: "icecast2",
            icecastmountpoint: "",
            radionomyid: "",
            radionomyapikey: "",
            radiojarid: "",
            radiocoid: "",
            shoutcastpath: "/electronic.mp3",
            shoutcastid: "1",
            streamsuffix: "",
            metadatainterval: "30000",
            volume: "66",
            debug: "false",
            uselocalstorage: "false",
            autoplay: "false",
            displayliveicon: "false",
            displayvisualizericon: "false",
            usestreamcorsproxy: "false",
            corsproxy: "",
            });
            });
        </script>
    </body>
    </html>
    `;


    const RadioPlayer = () => {
        return (
            <WebView
                originWhitelist={['*']}
                source={{ html: radioPlayerHTML }}
                allowFileAccess={true}
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        )
    };

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>HD</Text>
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
                    <RadioPlayer />
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
        flex: 1,
    },
});
