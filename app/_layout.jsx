import { CartProvider } from "@/context/cartContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CartProvider>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shop" }} />
      <Stack.Screen name="products/[id]" options={{ title: "Product" }} />
    </Stack>
    </CartProvider>
  );
}
