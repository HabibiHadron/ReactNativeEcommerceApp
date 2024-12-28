// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import { Ionicons, AntDesign } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const CartScreen = () => {
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([
//     {
//       id: "1",
//       quantity: 1,
//     },
//     {
//       id: "2",
//       quantity: 2,
//     },
//   ]);

//   const updateQuantity = (id, change) => {
//     setCartItems((items) =>
//       items.map((item) => {
//         if (item.id === id) {
//           const newQuantity = item.quantity + change;
//           if (newQuantity < 1) return item;
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       })
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   const shipping = 5.99;
//   const subtotal = calculateSubtotal();
//   const total = subtotal + shipping;

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <View className="px-4 py-4 border-b border-gray-200">
//         <View className="flex-row items-center justify-between">
//           <TouchableOpacity
//             onPress={() => router.back()}
//             className="w-10 h-10 items-center justify-center"
//           >
//             <Ionicons name="arrow-back" size={24} color="black" />
//           </TouchableOpacity>
//           <Text className="text-xl font-bold">Shopping Cart</Text>
//           <Text className="text-sm text-gray-500">
//             {cartItems.length} items
//           </Text>
//         </View>
//       </View>

//       {cartItems.length === 0 ? (
//         <View className="flex-1 items-center justify-center p-4">
//           <Ionicons name="cart-outline" size={64} color="gray" />
//           <Text className="text-xl font-semibold mt-4">Your cart is empty</Text>
//           <Text className="text-gray-500 text-center mt-2">
//             Looks like you haven't added any items to your cart yet
//           </Text>
//           <TouchableOpacity
//             className="mt-6 bg-green-700 px-8 py-3 rounded-full"
//             onPress={() => router.push("/")}
//           >
//             <Text className="text-white font-semibold">Start Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <>
//           <ScrollView className="flex-1">
//             <View className="p-4">
//               {cartItems.map((item) => (
//                 <View
//                   key={item.id}
//                   className="flex-row items-center py-4 border-b border-gray-200"
//                 >
//                   <Image
//                     source={{ uri: item.image }}
//                     className="w-20 h-20 rounded-lg bg-gray-200"
//                   />
//                   <View className="flex-1 ml-4">
//                     <View className="flex-row justify-between">
//                       <Text className="font-semibold text-lg">{item.name}</Text>
//                       <TouchableOpacity
//                         onPress={() => removeItem(item.id)}
//                         className="p-2"
//                       >
//                         <Ionicons name="trash-outline" size={20} color="red" />
//                       </TouchableOpacity>
//                     </View>
//                     <Text className="text-gray-500">Size: {item.size}</Text>
//                     <Text className="text-green-700 font-semibold">
//                       ${item.price.toFixed(2)}
//                     </Text>
//                     <View className="flex-row items-center mt-2">
//                       <TouchableOpacity
//                         onPress={() => updateQuantity(item.id, -1)}
//                         className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
//                       >
//                         <AntDesign name="minus" size={16} color="black" />
//                       </TouchableOpacity>
//                       <Text className="mx-4 font-semibold">
//                         {item.quantity}
//                       </Text>
//                       <TouchableOpacity
//                         onPress={() => updateQuantity(item.id, 1)}
//                         className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
//                       >
//                         <AntDesign name="plus" size={16} color="black" />
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               ))}
//             </View>

//             <View className="p-4 bg-gray-50">
//               <Text className="text-lg font-bold mb-4">Order Summary</Text>
//               <View className="flex-row justify-between mb-2">
//                 <Text className="text-gray-600">Subtotal</Text>
//                 <Text className="font-semibold">${subtotal.toFixed(2)}</Text>
//               </View>
//               <View className="flex-row justify-between mb-2">
//                 <Text className="text-gray-600">Shipping</Text>
//                 <Text className="font-semibold">${shipping.toFixed(2)}</Text>
//               </View>
//               <View className="border-t border-gray-200 my-2" />
//               <View className="flex-row justify-between">
//                 <Text className="font-bold">Total</Text>
//                 <Text className="font-bold text-lg">${total.toFixed(2)}</Text>
//               </View>
//             </View>
//           </ScrollView>

//           <View className="p-4 border-t border-gray-200">
//             <TouchableOpacity
//               className="w-full py-4 bg-green-700 rounded-full items-center"
//               onPress={() => router.push("/checkout")}
//             >
//               <Text className="text-white font-bold text-lg">
//                 Proceed to Checkout
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CartScreen;
