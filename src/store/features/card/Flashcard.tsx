import { View, Text, Animated } from "react-native";
import React from "react";

type Props = Card & {
  index: number;
  pan: Animated.ValueXY;
  boxWidth: number;
  halfBoxDistance: number;
  snapWidth: number;
}

const Flashcard = ({ index, id, frontText, backText, pan, boxWidth, halfBoxDistance, snapWidth }: Props) => {
  return (
    <Animated.View
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
      <View
        className="h-full justify-center items-center rounded-3xl border"
        key={id}
        style={{ width: boxWidth }}
      >
        <Text className="text-xl font-bold">{frontText}</Text>
      </View>
    </Animated.View>
  );
};

export default Flashcard;
