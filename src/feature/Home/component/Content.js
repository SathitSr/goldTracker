import { Text, View, FlatList } from "react-native";

const Content = (props) => {
  const { data } = props;
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "#FDBC24",
                marginBottom: 5,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>
                {item.type}
              </Text>
              <View style={{ padding: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: "50%", alignItems: "flex-start" }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      ราคาซื้อ
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {item.priceBuy}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <View style={{ width: "50%", alignItems: "flex-start" }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      ราคาขาย
                    </Text>
                  </View>
                  <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {item.priceSell}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        numColumns={1}
      />
    </View>
  );
};

export default Content;
