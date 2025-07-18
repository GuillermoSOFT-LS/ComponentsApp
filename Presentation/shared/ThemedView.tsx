import {View, ViewProps} from 'react-native';
import {useThemeColor} from "@/hooks/useThemeColor";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?:boolean;
    bgColor?: boolean;
}

const ThemedView = ({style, className,margin = false,safe = false,children}: Props) => {

    const backgroundColor = useThemeColor({}, 'background')

    const safeArea = useSafeAreaInsets()

    return (

        <View style={[{
            backgroundColor: backgroundColor,
            flex: 1,
            paddingTop: safe ? safeArea.top : 0,
            marginHorizontal: margin ? 10 :0,
        }, style,
        ]} className={className}>
            {children}
        </View>
    );
};
export default ThemedView;