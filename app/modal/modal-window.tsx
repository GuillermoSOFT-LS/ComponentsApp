import ThemedView from "@/Presentation/shared/ThemedView";
import ThemeText from "@/Presentation/shared/ThemeText";
import {StatusBar} from "expo-status-bar";
import {Platform} from "react-native";
import ThemedButton from "@/Presentation/shared/ThemedButton";
import {router} from "expo-router";

const ModalScreen = ()=> {
    return (
        <ThemedView className='justify-center items-center flex-1' style={{backgroundColor: '#A52182'}}>
            <ThemeText>Hola, soy un modal</ThemeText>
            <ThemedButton onPress={()=> router.push('/modal/modal-window2')}>
                Abrir Modal 2
            </ThemedButton>
                <ThemedButton onPress={()=> router.dismiss()}>Cerrar Modal</ThemedButton>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ThemedView>
    )
}

export default ModalScreen