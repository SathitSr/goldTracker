import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = (props) => {
  const { title } = props;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%",
        backgroundColor: "#FAA401",
        flexDirection: "row",
      }}
    >
      <View style={{ width: "10%" }}></View>

      <View
        style={{
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ width: "10%" }}></View>
    </View>
  );
};

export default Header;
