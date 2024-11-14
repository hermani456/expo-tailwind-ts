import { PlantlyButton } from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <View className="flex-1 justify-center items-center bg-teal-500">
      <PlantlyButton title="Finish Onboarding" onPress={handlePress} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
// });
