import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { getProduct } from "@/api/products";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-600">Loading product details...</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    alert(`Added ${quantity} item(s) to cart`);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header with back button and favorite */}
        <View className="relative">
          <Image
            source={{ uri: product.image }}
            className="w-full h-96"
            resizeMode="cover"
          />
          <View className="absolute top-4 left-4 right-4 flex-row justify-between">
            <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center">
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              className="w-10 h-10 bg-white rounded-full items-center justify-center"
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <AntDesign 
                name={isFavorite ? "heart" : "hearto"} 
                size={24} 
                color={isFavorite ? "red" : "black"} 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Info */}
        <View className="px-4 py-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold text-gray-800">{product.name}</Text>
            <Text className="text-2xl font-bold text-green-700">${product.price}</Text>
          </View>

          <Text className="text-gray-500 mt-2 leading-6">{product.description}</Text>

          {/* Size Selection */}
          <View className="mt-6">
            <Text className="text-lg font-semibold mb-3">Select Size</Text>
            <View className="flex-row space-x-3">
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  className={`w-12 h-12 rounded-full items-center justify-center border-2 
                    ${selectedSize === size 
                      ? 'border-green-700 bg-green-50' 
                      : 'border-gray-300'}`}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text className={`font-semibold 
                    ${selectedSize === size ? 'text-green-700' : 'text-gray-600'}`}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quantity Selector */}
          <View className="mt-6">
            <Text className="text-lg font-semibold mb-3">Quantity</Text>
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text className="text-lg font-semibold">{quantity}</Text>
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
                onPress={() => setQuantity(quantity + 1)}
              >
                <AntDesign name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <BlurView intensity={100} className="px-4 py-4 border-t border-gray-200">
        <TouchableOpacity
          className="w-full py-4 bg-green-700 rounded-full items-center"
          onPress={handleAddToCart}
        >
          <Text className="text-white font-bold text-lg">
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;