import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Header from "../../component/Header";
import Container from "../../component/Container";
import { getGoldInfo } from "./getGoldInfo";
import HeaderContent from "./component/HeaderContent";
import Content from "./component/Content";

const Home = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getGoldInfo();
      setData(data);
      setIsFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onRefresh = () => {
    setIsFetching(true);
    getData();
  };

  const ContentHeaderFlatList = () => {
    return <HeaderContent item={data.summary} />;
  };

  const ListFooterComponent = () => {
    return <Content data={data.today} isFetching={isFetching} />;
  };

  return (
    <Container>
      <Header title="ราคาทองวันนี้" />
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        {data.length === 0 ? null : (
          <FlatList
            onRefresh={() => onRefresh()}
            refreshing={isFetching}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ContentHeaderFlatList}
            ListFooterComponent={ListFooterComponent}
          />
        )}
      </View>
    </Container>
  );
};

export default Home;
