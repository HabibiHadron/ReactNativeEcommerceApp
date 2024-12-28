import React from "react";
import { getProducts } from "@/api/products";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import ProductCard from "@/components/ui/ProductCard";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (!products) {
    return <Text>Error occured while fetching products.</Text>;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
