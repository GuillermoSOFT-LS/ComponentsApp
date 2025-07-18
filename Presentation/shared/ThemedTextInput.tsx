import {TextInput, TextInputProps} from "react-native";

interface Props  extends TextInputProps {
    className?: string;
}

const  ThemedTextInput = ({className, ...rest}:Props)=> {
    return (

            <TextInput className={`px-2 py-4 border-b-2  border-gray-400 text-black dark:text-white ${className}`}
                       placeholderTextColor='gray'
                       {...rest}
            />

    )
}
export default ThemedTextInput;