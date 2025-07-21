import ThemedView from "@/Presentation/shared/ThemedView";
import ThemedCard from "@/Presentation/shared/ThemedCard";
import ThemedSwitch from "@/Presentation/shared/ThemedSwitch";
import {useState} from "react";
import {useThemeChangerContext} from "@/Presentation/context/ThemeChangerContext";

const ThemesScreen = () => {

    const VerifyContextTheme = useThemeChangerContext()

    const [darkModeSettings, setDarkModeSettings] = useState({
            darkMode: VerifyContextTheme.currentTheme === "dark",
            systemMode: VerifyContextTheme.isSystemTheme,
    })

    const setDarkMode = (value: boolean)=> {
       VerifyContextTheme.toggleTheme()

        setDarkModeSettings({
            darkMode: value,
            systemMode: false
        }
        )
    }

    const setSystemMode = (value: boolean)=> {

        if (value) {
            setDarkModeSettings({
                    darkMode: darkModeSettings.darkMode,
                    systemMode: true
                })
            VerifyContextTheme.setSystemTheme()
        }

    }


  return (
    <ThemedView>

        <ThemedCard className='px-5'>
            <ThemedSwitch
                text='Dark Mode'
                className='mb-5'
                value={darkModeSettings.darkMode}
                onValueChange={setDarkMode}
            />

            <ThemedSwitch
                text='System Mode'
                className='mb-5'
                value={darkModeSettings.systemMode}
                onValueChange={setSystemMode}
            />
        </ThemedCard>


    </ThemedView>
  );
};
export default ThemesScreen;
