import { Text, View } from "react-native"
import Constants from "expo-constants"
import ReposList from "./RepositoryList.jsx"

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text>
                Rate Repository Application
            </Text>
            <ReposList />
        </View>
    )
}

export default Main 