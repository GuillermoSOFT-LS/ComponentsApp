import {View, Animated, PanResponder, SafeAreaView, StyleSheet} from 'react-native';
import {useRef} from "react";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";

const Animation102Screen = () => {

    const inset = useSafeAreaInsets()

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: ()=> true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },
        ],{useNativeDriver: false} ),
        onPanResponderRelease: ()=> {
            Animated.spring(
                pan,
                {toValue: {x: 0, y: 0}, useNativeDriver: false},
            ).start()
        },
    })
  return (
    <View>
              <View style={[styles.container, {paddingTop: inset.top}]}>
                    <Animated.View
                        {...panResponder.panHandlers}
                        style={[pan.getLayout(), styles.box]}
                    />
             </View>
    </View>
  );
};
export default Animation102Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#61dafb',
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});
