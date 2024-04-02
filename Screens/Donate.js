import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';


export default function Donate() {
    const navigation = useNavigation();

    const DonorBoxWidget = () => {
        const donorBoxHTML = `
          <!DOCTYPE html>
          <html>
          <head>
            <!-- This script tag will load the Donorbox widget.js script -->
            <script src="https://donorbox.org/widget.js" paypalExpress="true"></script>
          </head>
          <body>
            <!-- This iframe will embed the Donorbox form -->
            <iframe src="https://donorbox.org/embed/hsl?default_interval=m" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="1100px" width="100%" ></iframe>
          </body>
          </html>
        `;

        return (
            <WebView
                originWhitelist={['*']}
                source={{ html: donorBoxHTML }}
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
            // <WebView
            //     source={{ uri: 'https://donorbox.org/hsl' }}
            //     style={{ flex: 1 }}
            //     javaScriptEnabled={true}
            //     domStorageEnabled={true}
            //     startInLoadingState={true}
            // />
        );
    };


    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Donate</Text>
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
                <DonorBoxWidget />
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
});
