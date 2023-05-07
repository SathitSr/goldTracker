import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import ModalPolicy from "./component/ModalPolicy";
import Header from "../../component/Header";
import Container from "../../component/Container";
import { getGoldInfo } from "./getGoldInfo";
import HeaderContent from "./component/HeaderContent";
import Content from "./component/Content";
import store from "../../../src/storage/store";
import Spinner from "react-native-loading-spinner-overlay";

const Home = () => {
  const [data, setData] = useState([]);
  const [isChecked, setIsCheck] = useState(false);
  const [policyShow, setPolicyShow] = useState(store.getState().app.readPolicy);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getGoldInfo();
      setData(data);
      setIsFetching(false);
      setLoading(false);
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
      {policyShow ? (
        <ModalPolicy
          isChecked={isChecked}
          setIsCheck={setIsCheck}
          policyShow={policyShow}
          setPolicyShow={setPolicyShow}
        />
      ) : (
        <>
          <Spinner visible={loading} />
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
        </>
      )}
    </Container>
  );
};

export default Home;
