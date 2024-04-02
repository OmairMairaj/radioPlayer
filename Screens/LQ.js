import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';


export default function LQ() {
    const navigation = useNavigation();

    const radioPlayerHTML = `
    <!DOCTYPE html>
        <html>
            <head>
    
            </head>
            <body>

                <script type="text/javascript" src="https://hosted.muses.org/mrp.js"></script>
                <script type="text/javascript">
                    MRP.insert({
                        'url':'https://c2.radioboss.fm:8224/320k.mp3',
                        'lang':'en',
                        'codec':'mp3',
                        'volume':66,
                        'autoplay':false,
                        'forceHTML5':true,
                        'jsevents':true,
                        'buffering':0,
                        'title':'housestationlive.',
                        'welcome':'enjoylife.',
                        'wmode':'transparent',
                        'skin':'oldradio',
                        'width':205,
                        'height':132
                    });
                </script>
            </body>
        </html>
    `;


    const RadioPlayer = () => (
        <WebView
            originWhitelist={['*']}
            source={{ html: radioPlayerHTML }}
            // source={{ uri: 'https://c2.radioboss.fm:8224/160k.mp3' }}
            onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
            }}
            onLoad={() => console.log('WebView loaded')}
        />
    );

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>LQ</Text>
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
