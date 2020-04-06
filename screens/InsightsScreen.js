import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon, Avatar, Badge, withBadge} from 'react-native-elements';
import { Divider, Tooltip, Text as MyText } from 'react-native-elements';


export default function InsightsScreen() {
  return (
    <>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
    <View style={styles.separatorComponent}>
        <Divider style={styles.separator} />
      </View>      
    </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  separatorComponent: {
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 58,
  },
  image:{
    width: 15,
    height: 15,
    marginRight: 10,

  },
  container: {
    backgroundColor: '#fafafa',
  },
  myLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
