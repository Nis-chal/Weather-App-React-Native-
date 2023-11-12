import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { City, UpComingWeather, CurrentWeather } from "./"
import { Feather } from "@expo/vector-icons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Instagram from "./instagram/Instagram"
const Dashboard = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen
        name="hell"
        component={Instagram}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UpComingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen
        name="profile"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
          tabBarBadge: 3
        }}
      />
    </Tab.Navigator>
  )
}

export default Dashboard
