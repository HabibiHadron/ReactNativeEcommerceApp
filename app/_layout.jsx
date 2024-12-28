import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{ title: "Shop" }} />
      <Stack.Screen name="products/[id]" options={{ title: "Product" }} />
    </Stack>
  );
}
