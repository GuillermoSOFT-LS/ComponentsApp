import ThemedView from "@/Presentation/shared/ThemedView";
import ThemeText from "@/Presentation/shared/ThemeText";
import {RefreshControl, ScrollView} from "react-native";
import {useState} from "react";

const PullToRefreshScreen = () => {

    const [isrefreshing, setisRefreshing] = useState(true)

    const onRefreshFun = async () => {
        setisRefreshing(true)

        setTimeout(()=> {
            setisRefreshing(false)
        },4000)
    }

  return (
    <ScrollView
    refreshControl={<RefreshControl refreshing={isrefreshing} onRefresh={onRefreshFun} />}>
        <ThemedView margin>
            <ThemeText>PullToRefreshScreen</ThemeText>
        </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
