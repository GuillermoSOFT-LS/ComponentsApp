import ThemedButton from "@/Presentation/shared/ThemedButton";
import ThemedView from "@/Presentation/shared/ThemedView";
import {Animated} from "react-native";
import {Colors} from "@/constants/Colors";
import useAnimation from "@/hooks/useAnimation";

const Animation101Screen = () => {

    const {animatedOpacity,animatedTop,fadeIn,fadeOut,movingPosition} =  useAnimation()

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

        <ThemedButton
            onPress={()=> {
                fadeIn({})
                movingPosition({})
            }}
            className='my-5'>
            FadeIn
        </ThemedButton>


        <ThemedButton onPress={ ()=> fadeOut({}) } className='my-5'>FadeOut</ThemedButton>

    </ThemedView>
  );
};
export default Animation101Screen;
