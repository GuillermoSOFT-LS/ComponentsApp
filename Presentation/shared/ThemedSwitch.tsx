import {Switch} from "react-native-gesture-handler";
import {Pressable, View, Platform} from "react-native";
import ThemeText from "@/Presentation/shared/ThemeText";
import {useThemeColor} from "@/hooks/useThemeColor";


interface Props {
    className?: string,
    value: boolean,
    text?: string
    onValueChange: (value: boolean) => void,

}
const ThemedSwitch  = ({value,text,className, onValueChange}:Props)=> {

    const  switchActiveColor = useThemeColor({}, 'primary')
    const  isAndroid =  Platform.OS === 'android'

    return (

        <Pressable
            onPress={()=> onValueChange((!value))}
        className={`flex-row justify-between items-center active:opacity-80 ${className}`}>
            {text ? <ThemeText type='h2'>{text}</ThemeText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                trackColor={{
                    false: 'grey',
                    true: switchActiveColor,
                }}

            />
        </Pressable>

    )
}

export default ThemedSwitch;