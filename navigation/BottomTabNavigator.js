import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AgendaScreen from '../screens/AgendaScreen';
import InsightsScreen from '../screens/InsightsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Mary';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
        tabBarOptions={{activeTintColor: '#F06E1D', style:{ backgroundColor: '#fff' } }} >
      <BottomTab.Screen
        name="Mary"
        component={HomeScreen}
        options={{
          title: 'Mary',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="MyCalendar"
        component={AgendaScreen}
        options={{
          title: 'My Calendar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-calendar" />,
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={InsightsScreen}
        options={{
          title: 'Community',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-people" />,
        }}
      />
      <BottomTab.Screen
        name="Activities"
        component={InsightsScreen}
        options={{
          title: 'Activities',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-body" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flash" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 30,
      height: 30,
      maxWidth: 30,
      maxHeight: 30,
      marginRight: 20,
      resizeMode: 'contain',
    },
  });

  switch (routeName) {
    case 'Mary':
      return <><Text style={{color: "#F06E1D"}}>Routinely</Text></>;
    case 'Links':
      return <Text style={{color: "#F06E1D"}}>Keep yourself updated</Text>;
    case 'MyCalendar':
      return <Text style={{color: "#F06E1D"}}>My Calendar</Text>;
    case 'Community':
      return <Text style={{color: "#F06E1D"}}>Community</Text>;
    case 'Activities':
      return <Text style={{color: "#F06E1D"}}>Browse Activities</Text>;
  }
}
