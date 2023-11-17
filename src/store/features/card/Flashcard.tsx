import { View, Text, Animated as NativeAnimated, Pressable, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = Card & {
  index: number;
  pan: NativeAnimated.ValueXY;
  boxWidth: number;
  halfBoxDistance: number;
  snapWidth: number;
};

const Flashcard = ({
  index,
  id,
  frontText,
  backText,
  pan,
  boxWidth,
  halfBoxDistance,
  snapWidth,
}: Props) => {
  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });
  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    };
  });

  return (
    <NativeAnimated.View
      style={{
        transform: [
          {
            scale: pan.x.interpolate({
              inputRange: [
                (index - 1) * snapWidth - halfBoxDistance,
                index * snapWidth - halfBoxDistance,
                (index + 1) * snapWidth - halfBoxDistance,
              ],
              outputRange: [0.8, 1, 0.8],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
          <Pressable
            className="h-full justify-center items-center rounded-3xl border"
            key={id}
            style={{ width: boxWidth }}
            onPress={() => {
              rotate.value = rotate.value ? 0 : 1;
            }}
          >
            <Text className="text-xl font-bold">{frontText}</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.backCard, backAnimatedStyles]}>
          <Pressable
            className="h-full justify-center items-center rounded-3xl border"
            key={id}
            style={{ width: boxWidth }}
            onPress={() => {
              rotate.value = rotate.value ? 0 : 1;
            }}
          >
            <Text className="text-xl font-bold">{backText}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </NativeAnimated.View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  frontcard: {
    backfaceVisibility: "hidden",
  },
  backCard: {
    position: "absolute",
    backfaceVisibility: "hidden",
    top: 0,
    bottom: 0
  },
});

export default Flashcard;
