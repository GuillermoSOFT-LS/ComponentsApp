import {Pressable, View} from "react-native";
import {router, Href} from "expo-router";
import ThemeText from "@/Presentation/shared/ThemeText";
import {Ionicons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";

interface Props {
    title: string;
    name: string;
    icon: keyof  typeof Ionicons.glyphMap;

    isFirst: boolean;
    isLast: boolean;
}

const MenuItem = ({title,name,icon, isFirst =false, isLast = false}:Props)=> {

        const [routeName] = name.split('/')
    const primaryColor = useThemeColor({}, 'primary')

    return (
       <Pressable
         className='bg-white dark:bg-black px-5 py-2'
         onPress={()=> router.push(routeName as Href)}
         style={{
             ...(isFirst && {
                 borderTopLeftRadius: 10,
                 borderTopRightRadius: 10,
                 paddingTop: 10,
             }),

             ...(isLast && {
                 borderTopLeftRadius: 10,
                 borderTopRightRadius: 10,
                 paddingBottom: 10,
             })
         }}
       >

           <View className='flex-row items-center'>
               <Ionicons name={icon} size={30} color={primaryColor} className="mr-5" />
               <ThemeText type='h2'>{title}</ThemeText>
           </View>

       </Pressable>
    )
}

export default MenuItem;