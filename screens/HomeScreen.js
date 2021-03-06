import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.hashTag}>Good morning Mary</Text>
          <Image
            source={
              __DEV__
                ? require('../assets/images/window.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>


        <View style={styles.getStartedContainer}>
          {/* <DevelopmentModeNotice /> */}

          <Text style={styles.getStartedText}>Hope you have a great day!</Text>
          <Text style={styles.logText}>Take a look at your calendar and get started on your activities</Text>

          {/* <Text style={styles.myContainer2}>Canada:</Text> */}
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.myContainer}>Browse our recommended activities</MonoText>
            <MonoText style={styles.myContainer}>and learn something new!</MonoText>
          </View>

          {/* <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will automatically reload.
          </Text> */}
        </View>

        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}


      </ScrollView>


      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>"Wake the kids up" starts in 5 minutes!</Text>

        {/* <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View> */}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  hashTag: {
    fontSize: 20,
    color: "#4B5161",
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  myContainer: {
    color: "#657580",
    paddingLeft: 10,
    paddingRight: 10
  },
  myContainer2: {
    fontSize: 16,
    backgroundColor: '#fff',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 40,
    marginBottom: -30
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 360,
    height: 280,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    marginTop: 40,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  logText: {
    fontSize: 13,
    color: 'rgba(96,100,109, 0.6)',
    lineHeight: 17,
    textAlign: 'center',
    paddingTop:8,
    marginBottom:-6
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#ffcd75',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
