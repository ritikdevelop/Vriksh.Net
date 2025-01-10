import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from "@/constants/Colors";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      {/*//todo Home Icon */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontWeight: "medium",
            fontSize: 12, 
          },
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />

      {/*//todo Task Icon */}
      <Tabs.Screen
        name="task"
        options={{
          tabBarLabel: "Task",
          tabBarLabelStyle:{
            fontWeight: "medium",
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />

      {/*//todo Dashboard Icon */}
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Task",
          tabBarLabelStyle:{
            fontWeight: "medium",
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />

      {/*//todo Expense Icon */}
      <Tabs.Screen
        name="expense"
        options={{
          tabBarLabel: "Expense",
          tabBarLabelStyle:{
            fontWeight: "medium",
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => (
            <Feather name="book" size={24} color={color} />
          ),
        }}
      />

      {/*//todo Tour Claim Icon */}
      <Tabs.Screen
        name="tourclaim"
        options={{
          tabBarLabel: "Tour Claim",
          tabBarLabelStyle:{
            fontWeight: "medium",
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
