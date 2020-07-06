import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Maps from "../pages/Maps";
import Detail from "../pages/Detail";
import Checkin from "../pages/Checkin";
import Portfolio from "../pages/Portfolio";
import Score from "../pages/Score";
import Account from "../pages/Account";

const AppTab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const MapsStack = () => (
  <AppStack.Navigator
    initialRouteName="Maps"
  >
    <AppStack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
    <AppStack.Screen
      name="Detail"
      component={Detail}
      options={{
        title: "Sobre",
        headerStyle: {
          backgroundColor: "#00448C",
        },
        headerTintColor: "#fff",
      }}
    />
  </AppStack.Navigator>
);

const CheckinStack = () => (
  <AppStack.Navigator
    initialRouteName="Maps"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#00448C",
      },
      headerTintColor: "#fff",
    }}
  >
    <AppStack.Screen
      name="Checkin"
      component={Checkin}
      options={{ title: "Check In" }}
    />
    <AppStack.Screen name="Portfolio" component={Portfolio} />
  </AppStack.Navigator>
);

const ScoreStack = () => (
  <AppStack.Navigator
    initialRouteName="Score"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#00448C",
      },
      headerTintColor: "#fff",
    }}
  >
    <AppStack.Screen
      name="Score"
      component={Score}
      options={{ title: "Pontuação" }}
    />
  </AppStack.Navigator>
);

const AccountStack = () => (
  <AppStack.Navigator
    initialRouteName="Account"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#00448C",
      },
      headerTintColor: "#fff",
    }}
  >
    <AppStack.Screen
      name="Account"
      component={Account}
      options={{ title: "Conta" }}
    />
  </AppStack.Navigator>
);

const AppRoutes = () => (
  <AppTab.Navigator
    initialRouteName="Maps"
    tabBarOptions={{
      activeTintColor: "#00448C",
      inactiveTintColor: "grey",
      showLabel: false,
    }}
  >
    <AppTab.Screen
      name="Maps"
      component={MapsStack}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />,
      }}
    />
    <AppTab.Screen
      name="Checkin"
      component={CheckinStack}
      options={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        tabBarIcon: ({ color }) => (
          <Icon name="check-circle" size={25} color={color} />
        ),
      }}
    />
    <AppTab.Screen
      name="Score"
      component={ScoreStack}
      options={{
        tabBarIcon: ({ color }) => <Icon name="star" size={25} color={color} />,
      }}
    />
    <AppTab.Screen
      name="Account"
      component={AccountStack}
      options={{
        tabBarIcon: ({ color }) => <Icon name="user" size={25} color={color} />,
      }}
    />
  </AppTab.Navigator>
);

export default AppRoutes;
