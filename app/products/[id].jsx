import { getProduct } from "@/api/products";
import { useCart } from "@/context/cartContext";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { onAddToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("id", id);
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error occured while fetching product details.</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onAddToCart(product.id)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 450,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e8b57",
  },
  button: {
    backgroundColor: "#2e8b57",
    padding: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
