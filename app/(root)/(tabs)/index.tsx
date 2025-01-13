import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlignLeft } from "lucide-react-native";
import { useRouter } from "expo-router";


export default function Home() {
  const router = useRouter();

  return (
    <View className="flex absolute h-screen w-full bg-white">
      <TouchableOpacity className="p-4 m-1">
          <AlignLeft size={30} color="#37c468" className="bg-gray-500" />
        </TouchableOpacity>
      <SafeAreaView className="ml-6 mt-0 p-3 flex justify-start">
        <Text className="text-2xl text-start font-rubik-medium">Welcome to Vriksh.Net</Text>
      </SafeAreaView>
    </View>
  );
}
