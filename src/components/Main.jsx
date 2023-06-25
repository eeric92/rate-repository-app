import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar.jsx";
import RepositoryList from "./RepositoryList.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
