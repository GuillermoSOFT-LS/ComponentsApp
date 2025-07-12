import {Text, TextProps} from "react-native";

interface props extends TextProps {
    className?: string;
    type?: 'normal' | 'semi-bold' | 'h1' | 'h2' | 'link'
}

const ThemeText = ({className,type, children,...rest}:props)=> {
    return (
        <Text
        className={[
            'text-light-textColor dark:text-dark-textColor',
            type === 'normal' ? 'font-normal' : undefined,
            type === 'semi-bold' ? 'font-semibold' : undefined,
            type === 'h1' ? 'text-3xl' : undefined,
            type === 'h2' ? 'text-xl' : undefined,
            type === 'link' ? 'font-normal underline' : undefined,
            className,
        ].join(' ')} >{children}</Text>
    )
}

export default ThemeText;