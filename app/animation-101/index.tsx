import ThemedButton from "@/Presentation/shared/ThemedButton";
import ThemedView from "@/Presentation/shared/ThemedView";
import {Animated, Easing} from "react-native";
import {useRef} from "react";
import {Colors} from "@/constants/Colors";

const Animation101Screen = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(-100)).current;


    const fadeIn = ()=> {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start()

        Animated.timing(animatedTop, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start()
    }

    const fadeOut = ()=> {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(()=> animatedTop.resetAnimation())
    }

  return (
    <ThemedView margin className={'justify-center items-center'}>

        <Animated.View
        style={{
            borderRadius: 25,
            backgroundColor: Colors.light.secondary,
            width: 150,
            height: 150,
            opacity: animatedOpacity,
            transform: [{
                translateY: animatedTop,
            }]
        }}
        />

        <ThemedButton onPress={fadeIn} className='my-5'>FadeIn</ThemedButton>
        <ThemedButton onPress={fadeOut} className='my-5'>FadeOut</ThemedButton>

    </ThemedView>
  );
};
export default Animation101Screen;
