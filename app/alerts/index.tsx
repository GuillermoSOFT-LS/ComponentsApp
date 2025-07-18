import ThemedButton from "@/Presentation/shared/ThemedButton";
import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const AlertsScreen = () => {

    const showAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );

  return (
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
              <ThemedButton onPress={showAlert}>Hola</ThemedButton>
          </SafeAreaView>
      </SafeAreaProvider>
  )
};
export default AlertsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});