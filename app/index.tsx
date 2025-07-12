import { View } from 'react-native';
import {animationMenuRoutes, menuRoutes, uiMenuRoutes} from "@/constants/Routes";
import {Href, Link} from "expo-router";
import ThemedView from "@/Presentation/shared/ThemedView";
import MenuItem from "@/Presentation/menu/MenuItem";
const ComponentsApp = () => {
  return (
    <ThemedView margin>
        {
            animationMenuRoutes.map((route, index) => (
                <MenuItem key={route.title}
                 title={route.title}
                 icon={route.icon}
                 name={route.name}
                 isFirst={index === 0}
                 isLast={index === animationMenuRoutes.length -1}
                />
            ))}

        <View className='my-5'>
          { uiMenuRoutes.map((route, index) => (
              <MenuItem key={route.title}
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={index === uiMenuRoutes.length -1}
              />
          ))}

          {
            menuRoutes.map((route, index) => (
                <MenuItem key={route.title}
                          title={route.title}
                          icon={route.icon}
                          name={route.name}
                          isFirst={index === 0}
                          isLast={index === menuRoutes.length -1}
                />
            ))}
        </View>

    </ThemedView>
  );
};
export default ComponentsApp;
