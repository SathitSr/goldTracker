import { View, Modal, Text, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../../../src/storage/app/appSlice";

const ModalPolicy = (props) => {
  const { isChecked, setIsCheck, policyShow, setPolicyShow } = props;
  const dispatch = useDispatch();

  return (
    <Modal animationType="slide" transparent={true} visible={policyShow}>
      <View
        style={{
          flex: 1,
          padding: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: "100%",
            borderRadius: 15,
            padding: 20,
          }}
        >
          <WebView
            source={{
              uri: "https://www.privacypolicies.com/live/c033af7d-ba2f-41dd-88c8-8ad17a932179",
            }}
            style={{ marginTop: 20 }}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Checkbox value={isChecked} onValueChange={setIsCheck} />
            <Text style={{ marginLeft: 20 }}>
              เข้าใจเนื้อหาของ Privacy Policy แล้ว
            </Text>
          </View>
          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => {
              dispatch(appActions.readPolicyComplete());
              setPolicyShow(false);
            }}
            disabled={!isChecked}
          >
            <View
              style={{
                backgroundColor: isChecked ? "#FAA401" : "#8BACAA",
                padding: 5,
              }}
            >
              <View style={{ padding: 5 }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hide Modal
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPolicy;
