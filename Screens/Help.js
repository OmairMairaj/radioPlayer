import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import homebg from '../assets/homebg.jpg';
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native'


export default function Help() {
    const navigation = useNavigation();
    const [message, setMessage] = useState('');
    const [replyEmail, setReplyEmail] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSubmit = () => {
        // Implement what happens when the user submits the form
        if (!selectedSubject || !message) {
            alert('Please select a subject and enter a message');
            return;
        }
        console.log(selectedSubject, message, replyEmail);
    };



    // const CheckboxOption = ({ label, isSelected, onToggle }) => (
    //     <TouchableOpacity activeOpacity={1} style={styles.checkboxContainer} onPress={onToggle}>
    //         <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
    //             {isSelected && <EntypoIcon name={"check"} style={styles.checkIcon} />}
    //         </View>
    //         <Text style={styles.checkboxLabel}>{label}</Text>
    //     </TouchableOpacity>
    // );

    const CheckboxOption = ({ label, isSelected, onSelect }) => (
        <TouchableOpacity activeOpacity={1} style={styles.checkboxContainer} onPress={() => onSelect(label)}>
            <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                {isSelected && <EntypoIcon name={"check"} style={styles.checkIcon} />}
            </View>
            <Text style={styles.checkboxLabel}>{label}</Text>
        </TouchableOpacity>
    );

    const handleToggleSubject = (subject) => {
        setSelectedSubject(subject);
    };

    const subjects = [
        'Spam (hello im musician)',
        'Bad day, just want insult',
        'Complain without insult',
        'I need help, im lost!',
        'Talk to you my friend',
        'Report a bug on the app'
    ];




    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name={"chevron-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>help me</Text>
                {/* <View style={{ position: "absolute", right: 16, bottom: 16, backgroundColor: '#ffff' }}> */}
                <TouchableOpacity style={styles.iconButton} onPress={() => { }}>
                    <Icon name={"ellipsis-vertical"} style={styles.icon} />
                </TouchableOpacity>
                {/* </View> */}
            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'>
            <ImageBackground source={homebg} resizeMode="cover" style={styles.image}>
                <Header />
                <View style={styles.view}>
                    <View style={styles.box}>
                        <View style={styles.subjectBox}>
                            <View style={styles.subjectHeaderBox}>
                                <Text style={styles.subjectHeader}>Subject</Text>
                            </View>

                            {/* Subject buttons */}
                            <View style={styles.subjectContainer}>
                                {subjects.map((subject, index) => (
                                    <CheckboxOption
                                        key={index}
                                        label={subject}
                                        isSelected={selectedSubject === subject}
                                        onSelect={handleToggleSubject}
                                    />
                                ))}
                            </View>
                        </View>

                        {/* Message input */}
                        <TextInput
                            style={styles.messageInput}
                            onChangeText={setMessage}
                            value={message}
                            placeholder="Let your message enter the bip"
                            placeholderTextColor={'#fdf9f8'}
                            multiline
                        />

                        {/* Reply email input */}
                        <View style={styles.emailBox}>
                            <View style={styles.emailInnerBox}>
                                <View style={styles.smallBox}></View>
                                <TextInput
                                    style={styles.emailInput}
                                    onChangeText={setReplyEmail}
                                    value={replyEmail}
                                    placeholder="Fill if you want a reply"
                                    keyboardType="email-address"
                                    placeholderTextColor={'#fdf9f8'}
                                />
                            </View>
                        </View>

                        {/* Submit button */}
                        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>I'm Proud of my Message!</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground >

        </ScrollView >
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
        height: 80,
        // padding: 10,
        backgroundColor: "rgba(1, 26, 66, 0.5)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    backButton: {
        position: "absolute",
        left: 16,
        bottom: 5,
        padding: 5,
    },
    title: {
        color: "#fdf9f8",
        fontWeight: "bold",
        fontFamily: 'Indie Flower',
        fontSize: 26,
    },
    iconButton: {
        position: "absolute",
        right: 16,
        bottom: 5,
        padding: 5,
    },
    icon: {
        color: '#b45575',
        fontSize: 25,
        fontWeight: "bold",
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
        width: '100%',

    },
    subjectBox: {
        width: '90%',
        backgroundColor: '#56565b',
    },
    subjectHeaderBox: {
        height: 30,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#b45575',
        marginBottom: 20,

    },
    subjectHeader: {
        fontSize: 16,
        fontWeight: '900',
        fontFamily: 'Poiret One',
        color: '#fdf9f8',
    },
    subjectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        width: '50%',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 30
    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#ddd',
        marginRight: 10,
        backgroundColor: '#fdf9f8'
    },
    checkboxSelected: {
        backgroundColor: '#fdf9f8',
        alignItems: 'center',
    },
    checkIcon: {
        color: 'green',
        fontSize: 15,
    },
    checkboxInner: {
        backgroundColor: '#fdf9f8',
    },
    checkboxLabel: {
        flex: 1,
        color: '#fdf9f8',
        fontFamily: 'Poiret One',
    },
    messageInput: {
        height: 100,
        marginBottom: 20,
        padding: 10,
        paddingTop: 10,
        width: '90%',
        backgroundColor: '#56565b',
        marginTop: 20,
        color: '#fdf9f8',
        fontFamily: 'Poiret One',
    },
    emailBox: {
        marginBottom: 20,
        width: '90%',
        backgroundColor: '#b45575',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    emailInnerBox: {
        backgroundColor: '#56565b',
        width: '88%',
        padding: 10,
    },
    smallBox: {
        width: 10,
        height: 10,
        backgroundColor: '#b45575',
        position: 'absolute',
        left: -5,
        top: 20,
        transform: [{ rotate: '45deg' }],
    },
    emailInput: {
        borderBottomColor: '#fdf9f8',
        borderBottomWidth: 1,
        padding: 5,
        color: '#fdf9f8',
        fontFamily: 'Poiret One',
        textTransform: 'lowercase',
    },
    submitButton: {
        padding: 10,
        backgroundColor: '#b45575',
        width: '90%',
    },
    submitButtonText: {
        color: '#fdf9f8',
        textAlign: 'center',
        fontFamily: 'Poiret One',
        fontWeight: 'bold',
    },

});
