import { colors } from '@/styles/colors'
import { shadowStyle } from '@/styles/shadows'
import { textTheme } from '@/styles/texts'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface AppButtonProps extends TouchableOpacityProps {
    text?: string
}

export const AppButton: FC<AppButtonProps> = (props) => {

    const { style, text, onPress } = props

    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            {text && <Text style={[textTheme.title, {color: colors.background}]}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 12,
        ...shadowStyle("secondary").small,
        justifyContent: "center",
        alignItems: "center",
        maxWidth:"100%"
    }
})
