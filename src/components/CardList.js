import React from "react";
import { View, FlatList } from "react-native";
import Card from "./Card";

const CardList = ({ data, viewAction, bookmarkAction, shareAction }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            item={item}
            viewAction={viewAction}
            bookmarkAction={bookmarkAction}
            shareAction={shareAction}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CardList;
