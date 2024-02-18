import 'react-native-gesture-handler';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
// import Header from './components/Header';
import homebg from './assets/homebg.jpg';
import Navigation from './Routes/Navigation';
import { NavigationContainer } from '@react-navigation/native';

// import checkVersion from 'react-native-store-version';
// import VersionCheck from 'react-native-version-check';



export default function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const [appIsReady, setAppIsReady] = React.useState(false);
  // const versionNumber = VersionCheck.getCurrentVersion();
  // const iosStoreURL = 'https://apps.apple.com/pk/app/tcgfish/id1663269891';
  // const androidStoreURL = 'https://play.google.com/store/apps/details?id=com.tcgfish';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // React.useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const check = await checkVersion({
  //         version: versionNumber, // app local version
  //         iosStoreURL: iosStoreURL,
  //         androidStoreURL: androidStoreURL,
  //         country: 'us', // default value is 'jp'
  //       });
  //       // console.log(check);
  //       if (check.result === 'new') {
  //         // if app store version is new
  //         // console.log(check);
  //         // console.log(versionNumber);
  //         Alert.alert(
  //           "Update Required",
  //           "Please update your app to the latest version.",
  //           [
  //             // { text: "Open Settings", onPress: () => { Linking.openURL('app-settings:') } }
  //             {
  //               text: "Open Store",
  //               onPress: () => { openStore() }
  //             },
  //           ]
  //         );
  //       }
  //       else if (check.result === 'equal' || check.result === 'old') {
  //         setTimeout(() => {
  //           setAppIsReady(true);
  //         }, 2000);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   init();
  // }, []);

  return (
    <View style={styles.app}>
      <ImageBackground source={homebg} resizeMode="cover" style={styles.image}>
        <StatusBar
          backgroundColor={'#5D7931fd'}
          barStyle={'light-content'}
        />
        {/* <SafeAreaView> */}
        {/* <Header /> */}
        <Navigation />
        {/* </SafeAreaView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',

  },
  image: {
    flex: 1,
  },
});
