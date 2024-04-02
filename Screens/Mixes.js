
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';


export default function Mixes() {
    const navigation = useNavigation();

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Mixes</Text>
                <TouchableOpacity style={styles.iconButton} onPress={() => { }}>
                    <Icon name={"ellipsis-vertical"} style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }

    const PodcastPlayer = () => {
        return (
            <View style={styles.player}>
                <WebView
                    style={styles.webview}
                    source={{ uri: 'https://player.captivate.fm/show/1cb4408d-ac06-4e55-a2ce-5b7483928fa3' }}
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction={false}
                />
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={homebg} resizeMode="cover" style={styles.image}>
                <Header />
                <PodcastPlayer />
            </ImageBackground >
        </View >
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
    player: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        overflow: 'hidden',
        // padding: 10,
    },
    webview: {
        // width: '100%',
        // // margin: 10,
        // marginBottom: 40,
        // borderRadius: 6,
    },

});
