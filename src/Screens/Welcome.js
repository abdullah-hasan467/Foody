import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";


const Welcome = () => {
    const animation = useRef(null);
  const navigation = useNavigation();
  return (
    <View className="bg-[#f64e32] flex-1 justify-center items-center space-y-10 relative">
      <Image
        source={require("../../assets/images/background.png")}
        style={{
          position: "absolute",
          width: wp(100),
          height: hp(100),
          resizeMode: "cover",
        }}
      />

      <StatusBar style="light" />

      {/* Lottie Logo */}
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: wp(60),
            height: hp(50),
          }}
          source={require("../../assets/lottie/food-logo.json")}
        />
      </View>

      {/* Title and Subtitle */}
      <View className="flex items-center space-y-2">
        <Text
          className="text-white font-extrabold tracking-widest"
          style={{
            fontSize: hp(5),
          }}
        >
          Food Cafe
        </Text>

        <Text
          className="text-white tracking-widest font-medium"
          style={{
            fontSize: hp(2.5),
          }}
        >
          Explore some delicious Food
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: hp(1.2),
            paddingHorizontal: hp(5),
            borderRadius: hp(1.5),
            marginTop:20
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#f64e32",
              fontSize: hp(2.2),
              fontWeight: "medium",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome