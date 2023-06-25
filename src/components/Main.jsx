import { View } from "react-native";
import AppBar from "./AppBar.jsx";
import ReposList from "./RepositoryList.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <ReposList />
    </View>
  );
};

export default Main;
