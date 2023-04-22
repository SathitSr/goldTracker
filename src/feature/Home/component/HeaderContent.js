import { Text, View, FlatList } from "react-native";

const HeaderContent = (props) => {
  const { item } = props;
  return (
    <>
      <View
        style={{
          backgroundColor: "#FAA401",
          borderRadius: 15,
          padding: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {item.title.split("/")[0]}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {item.title.split("/")[1]}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={{
            marginTop: 10,
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
          }}
          ellipsizeMode="clip"
        >
          --------------------------------------------------------
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
          >
            ทองคำแท่ง 96.5%
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ width: "50%", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                ขายออก
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.goldBar.sellOut}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ width: "50%", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                รับซื้อ
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.goldBar.buyIn}
              </Text>
            </View>
          </View>
        </View>

        <Text
          numberOfLines={1}
          style={{
            marginTop: 10,
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
          }}
          ellipsizeMode="clip"
        >
          --------------------------------------------------------
        </Text>

        <View style={{ marginTop: 10 }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
          >
            ทองรูปพรรณ 96.5%
          </Text>
        </View>

        <View style={{ padding: 10 }}>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View style={{ width: "50%", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                ขายออก
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.goldJewelry.sellOut}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ width: "50%", alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                ฐานภาษี
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.goldJewelry.tax}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderContent;
