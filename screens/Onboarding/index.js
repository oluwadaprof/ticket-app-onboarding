import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import { COLORS, SIZES, FONTS, constants } from "../../constants";
// import Svg, { Path } from "react-native-svg";
import { TextButton } from "../../components";

const Onboarding = () => {
  const [isLastItem, setIsLastItem] = React.useState(false);
  const [isFirstItem, setIsFirstItem] = React.useState(true);
  //SVG
  const controlX = SIZES.width / 2; //Control center point's X coordinate

  //Flatlist
  const currentIndex = React.useRef(0);
  const screenFlatListRef = React.useRef();
  const titleFlatListRef = React.useRef();
  const handleNextPress = () => {
    if (currentIndex.current < constants.onboarding_screens.length - 1) {
      currentIndex.current += 1;
      const nextIndex = currentIndex.current;
      const offset = nextIndex * SIZES.width;

      screenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      titleFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });

      if (currentIndex.current === constants.onboarding_screens.length - 1) {
        setIsLastItem(true);
      }
      setIsFirstItem(nextIndex === 0);
    }
  };

  const handleBackPress = () => {
    if (currentIndex.current > 0) {
      currentIndex.current -= 1;
      const prevIndex = currentIndex.current;
      const offset = prevIndex * SIZES.width;

      screenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      titleFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });

      setIsLastItem(prevIndex === constants.onboarding_screens.length - 1);
      setIsFirstItem(prevIndex === 0);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Screenshot List  */}
      <View
        style={{
          flex: 2,
          backgroundColor: COLORS.primary50,
        }}
      >
        <FlatList
          ref={screenFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={(item) => `onboarding_screens_phone-${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    marginTop: SIZES.padding * 3,
                    width: SIZES.width * 0.8,
                    height: SIZES.height * 0.8,
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      {/* Title and Description List */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.gray900,
          width: "100%",
        }}
      >
        {/* Curve */}
        {/* <Svg
          style={{
            position: "absolute",
            top: -100,
          }}
          width={SIZES.width}
          height={100}
        >
          <Path
            d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray500}
          />
        </Svg> */}

        {/* Title and Description */}
        <FlatList
          ref={titleFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={(item) => `onboarding_screens_title${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  paddingHorizontal: SIZES.radius,
                  width: SIZES.width,
                  alignItems: "center",
                }}
              >
                {/* Title */}
                <Text
                  style={{
                    ...FONTS.h1,
                    textAlign: "center",
                    marginTop: SIZES.radius,
                    color: COLORS.primary100,
                  }}
                >
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  style={{
                    ...FONTS.pr2,
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.primary100,
                  }}
                >
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />

        {/* Text Button */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TextButton
            label={isLastItem ? "Get Started" : "Next"}
            contentContainerStyle={{
              flex: 2,
              marginLeft: isFirstItem ? SIZES.padding : SIZES.padding,
              marginHorizontal: isFirstItem ? SIZES.padding : 0,
              marginBottom: SIZES.padding,
            }}
            onPress={handleNextPress}
          />
          {!isFirstItem && (
            <TextButton
              label="<"
              contentContainerStyle={{
                marginRight: SIZES.padding,
                marginLeft: 10,
                marginBottom: SIZES.padding,
                flex: 0.5,
              }}
              onPress={handleBackPress}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
