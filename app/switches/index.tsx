import React, {useState} from 'react';
import {Switch as RNCSwitch, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ThemedCard from "@/Presentation/shared/ThemedCard";
import ThemedSwitch from "@/Presentation/shared/ThemedSwitch";
import ThemedView from "@/Presentation/shared/ThemedView";

const Switch = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <ThemedView margin className='w-full'>

                    <ThemedCard>
                        <ThemedSwitch
                            text='active'
                            onValueChange={(value) => setState({...state, isActive: value})}
                            className='mb-2'
                            value={state.isActive}
                        />
                    </ThemedCard>

                    <ThemedCard>
                        <ThemedSwitch
                            text='Hambriento'
                            onValueChange={(value) => setState({...state, isHungry: value})}
                            className='mb-2'
                            value={state.isHungry}
                        />
                    </ThemedCard>

                    <ThemedCard>
                        <ThemedSwitch
                            text='feliz'
                            onValueChange={(value) => setState({...state, isHappy: value})}
                            className='mb-2'
                            value={state.isHappy}
                        />
                    </ThemedCard>

                </ThemedView>



            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Switch;
