import React from "react";
import { FlatList, Image, View } from "react-native";
import { COLORS, SIZES, FONTS, constants } from "../../constants";
// import { Path, Svg } from "react-native-svg";

const Onboarding = () => {
  //SVG
  const controlX = SIZES.width / 2; //Control center point's X coordinate

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
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={(item) => `onboarding_screens_phone-${item.id}`}
          renderItem={({ item, index }) => (
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
          )}
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
        {/* Curve
        <Svg
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
      </View>
    </View>
  );
};

export default Onboarding;
