import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
// eslint-disable-next-line import/no-unresolved
import "@/global.css";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/Button";
import { useRouter } from "expo-router";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();

  return (
    <FlatList
      contentContainerClassName="p-4"
      data={plants}
      renderItem={({ item }) => <PlantCard key={item.id} plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add a plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}
