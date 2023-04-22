import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#FAA401" }}>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          marginTop: insets.top,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Container;
