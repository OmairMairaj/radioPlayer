import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";


export default function Product() {
    const navigation = useNavigation();


    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>turn me on</Text>
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
                {/* <Text style={styles.text}>Product Screen</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Product')}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity> */}
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width,
        // backgroundColor: '#0e1628',
        // paddingTop: Platform.OS === 'ios' ? 0 : 30,
        // paddingHorizontal: 20,
        // alignItems: "center",
        // justifyContent: "center",
        height: '100%',
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

});
