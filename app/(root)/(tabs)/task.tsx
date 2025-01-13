import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";


export default function task() {
  return (
    <SafeAreaView className="bg-white h-screen flex">
      <View>
        <Search />
      </View>
      <View className="flex flex-row items-center justify-around 
      gap-20 m-3 p-2">
        <Text className="font-rubik-medium text-lg">Start Task</Text>
        <Text className="font-rubik-medium text-lg">Schedule Task</Text>
      </View>
    </SafeAreaView>
  );
}
