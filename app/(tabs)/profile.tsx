import { useUserStore } from "@/store/userStore";
import { Text, View, Button } from "react-native";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-6xl font-bold bg-gradient-to-b p-2 from-teal-400 to-purple-700 text-transparent bg-clip-text">
        Profile Screen
      </Text>
      <Button title="Go to Home" onPress={toggleHasOnboarded} />
    </View>
  );
}
