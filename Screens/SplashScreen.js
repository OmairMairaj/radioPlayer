import React from 'react';
import Video from 'react-native-video';
import launchVideo from '../assets/launchVideo.mp4';
import { StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    return (
        <Video
            source={launchVideo} // Can be a URL or a local file.
            style={styles.backgroundVideo}
            muted={false}
            // repeat={true}
            resizeMode={"cover"} // Cover the whole screen at aspect ratio.
            rate={1.0}
            // controls={true}
            ignoreSilentSwitch={"obey"}
            onEnd={() => navigation.navigate('Home')} // Go to the next screen after the video ends.
        />
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
    },
});

export default SplashScreen;