import { PlantlyButton } from "@/components/Button";
import PlantyImage from "@/components/PlantyImage";
import { useUserStore } from "@/store/userStore";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      className="flex-1 justify-around items-center bg-teal-500"
    >
      <StatusBar style="light" />
      <View>
        <Text className="text-white text-3xl text-center">
          Welcome to Plantly
        </Text>
        <Text className="text-white text-lg text-center">
          Your plant companion
        </Text>
      </View>
      <PlantyImage />
      <PlantlyButton title="Finish Onboarding" onPress={handlePress} />
    </LinearGradient>
  );
}
