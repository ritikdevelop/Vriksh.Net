import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/search";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function task() {
  return (
    <SafeAreaView className="bg-white h-full p-2">
      <View>
        <Search />
      </View>
      <View
        className="flex flex-row items-center justify-around 
      gap-20"
      >
        <TouchableOpacity className="border border-green-200 bg-green-400 rounded-lg p-3 m-2">
          <Text className="font-rubik-medium text-md">Start Task</Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-green-200 bg-green-400 rounded-lg p-3 m-2">
          <Text className="font-rubik-medium text-md">Schedule Task</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row justify-between gap-30 p-3">
      <TouchableOpacity className="bg-green-400 p-1 rounded-lg">
        <Text className="font-rubik">
          All
          <AntDesign name="down" size={15} color="black" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        
      <Text className="font-rubik bg-green-400 p-1 rounded-md ">
          Month
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text className="font-rubik bg-green-400 p-1 rounded-md ">
          Month
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
