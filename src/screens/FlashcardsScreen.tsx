import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import Flashcard from "../store/features/card/Flashcard";

const FlashcardsScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const navigation = useNavigation();
  const { data: cards } = useGetAllCardsInDeckQuery(id);

  const pan = React.useRef(new Animated.ValueXY()).current;

  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

  const boxWidth = scrollViewWidth * 0.9;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const snapWidth = boxWidth;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">{currentIndex + 1}/{cards?.length}</Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <MaterialCommunityIcons name="cog-outline" size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        className="mb-10"
        horizontal
        data={cards}
        contentContainerStyle={{ paddingVertical: 16 }}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={snapWidth}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance,
        }}
        contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
        onScroll={(event) => {
          const totalWidth = event.nativeEvent.layoutMeasurement.width;
          const xPosition = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(xPosition / totalWidth);
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
          }
          Animated.event([{ nativeEvent: { contentOffset: { x: pan.x } } }], {
            useNativeDriver: false,
          })(event);
        }}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={(props) => {
          const { index, item } = props;

          return (
            <Flashcard
              index={index}
              {...item}
              pan={pan}
              boxWidth={boxWidth}
              halfBoxDistance={halfBoxDistance}
              snapWidth={snapWidth}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FlashcardsScreen;

// import { Pressable, StyleSheet, Text, View } from "react-native";
// import Animated, {
//   interpolate,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// export default function FlashcardsScreen() {
//   const rotate = useSharedValue(0);
//   const frontAnimatedStyles = useAnimatedStyle(() => {
//     const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
//     return {
//       transform: [
//         {
//           rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
//         },
//       ],
//     };
//   });
//   const backAnimatedStyles = useAnimatedStyle(() => {
//     const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
//     return {
//       transform: [
//         {
//           rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
//         },
//       ],
//     };
//   });
//   return (
//     <View className="flex-1 bg-red-200 items-center justify-center">
//       <View>
//         <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
//           <Pressable
//             onPress={() => {
//               rotate.value = rotate.value ? 0 : 1;
//             }}
//             className="bg-gray-200"
//           >
//             <Text>FRONT</Text>
//           </Pressable>
//         </Animated.View>
//         <Animated.View style={[styles.backCard, backAnimatedStyles]}>
//           <Pressable
//             onPress={() => {
//               rotate.value = rotate.value ? 0 : 1;
//             }}
//             className="bg-gray-200"
//           >
//             <Text>BACK</Text>
//           </Pressable>
//         </Animated.View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   frontcard: {
//     position: "absolute",
//     backfaceVisibility: "hidden",
//   },
//   backCard: {
//     backfaceVisibility: "hidden",
//   },
// });
