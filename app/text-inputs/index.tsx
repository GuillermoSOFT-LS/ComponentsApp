import ThemedView from "@/Presentation/shared/ThemedView";
import {useState} from "react";
import ThemedCard from "@/Presentation/shared/ThemedCard";
import ThemeText from "@/Presentation/shared/ThemeText";
import ThemedTextInput from "@/Presentation/shared/ThemedTextInput";
import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";


const isIOS = Platform.OS === "ios"

const TextInputsScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

  return (
      <ScrollView>
      <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
      >
              <ThemedView margin>
                  <View className=''>
                      <ThemedTextInput
                          placeholder='Ingresa tu nombre'
                          autoCapitalize='words'
                          autoCorrect={false}
                          onChangeText={(text) => setForm({...form, name: text})}/>

                      <ThemedTextInput
                          placeholder='Ingresa tu email'
                          onChangeText={(text) => setForm({...form, email: text})}
                          keyboardType={'email-address'}/>

                      <ThemedTextInput
                          placeholder='Ingresa tu phone'
                          keyboardType={'phone-pad'}
                          onChangeText={(text) => setForm({...form, phone: text})}/>

                  </View>


                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText >
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>
                  <ThemedCard className='my-5 py-5'>
                      <ThemeText>
                          {JSON.stringify(form,null,2)}
                      </ThemeText>
                  </ThemedCard>

                  <ThemedCard>
                      <ThemedTextInput
                          placeholder='Ingresa tu phone'
                          keyboardType={'phone-pad'}
                          onChangeText={(text) => setForm({...form, phone: text})}/>
                  </ThemedCard>

                  {isIOS && <View style={{paddingBottom: 100}} />}



              </ThemedView>
      </KeyboardAvoidingView>
</ScrollView>

  );
};
export default TextInputsScreen;
