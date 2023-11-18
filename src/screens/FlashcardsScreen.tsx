import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import Flashcard from "../store/features/card/Flashcard";
import Carousel from "react-native-snap-carousel";

const FlashcardsScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const navigation = useNavigation();
  const { data: cards } = useGetAllCardsInDeckQuery(id);

  const carouselRef = useRef<any>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { width } = Dimensions.get("window");

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">
          {currentIndex + 1}/{cards?.length}
        </Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <MaterialCommunityIcons name="cog-outline" size={25} />
        </TouchableOpacity>
      </View>

      <Carousel
        ref={carouselRef}
        vertical={false}
        data={cards!}
        renderItem={(args: any) => (
          <Flashcard {...args.item} boxWidth={width * 0.9} />
        )}
        sliderWidth={width}
        itemWidth={width * 0.9}
        contentContainerCustomStyle={{ paddingVertical: 16 }}
        slideStyle={{ marginBottom: 40 }}
        onScrollIndexChanged={(index) => {
          setCurrentIndex(index)
        }}
      />
    </SafeAreaView>
  );
};

export default FlashcardsScreen;
