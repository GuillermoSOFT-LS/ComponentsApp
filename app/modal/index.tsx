import ThemedView from "@/Presentation/shared/ThemedView";
import {Link, router} from "expo-router";
import {Text} from "react-native";
import ThemedButton from "@/Presentation/shared/ThemedButton";

const ModalScreen = () => {
  return (
    <ThemedView>
        <ThemedButton onPress={()=> router.push('/modal/modal-window')}>
            Abrir Modal
        </ThemedButton>


    </ThemedView>
  );
};
export default ModalScreen;
